import './Lists.css';
import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import ListTr from './ListTr';
import { Link } from 'react-router-dom';

/**
 * @typedef {{
*   id: string,
*   rank: number,
*   name: string,
*   symbol: string,
*   quotes: {
*     KRW: {
*       price: number,
*       market_cap: number,
*       volume_24h: number,
*       percent_change_24h: number,
*       percent_change_7d: number
*     }
*   }
* }} CoinsType
*/

/**
* @returns {JSX.Element}
*/

const MAX_SUMMARY_LENGTH = 150; // 원하는 최대 요약 길이 설정

const Lists = () => {
    const [info, setInfo] = useState([]);
  
    // 고유 값으로 사용 될 id
    // ref 를 사용하여 변수 담기
    const nextId = useRef(11);

  //데이터 호출
  useEffect(() => {
    axios.post('http://115.85.181.240:8000/blockchain/apitest')
      .then(response => {
        setInfo(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const refreshPage = () => {
    window.location.reload();
  }

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW")
    .then(response => response.json())
    .then(json => {
      setCoins(json.slice(0, 10));
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      // 에러 넘버를 확인
      console.log(error.response.status);
    })
  }, [])

  const top10Numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  const isFirstItemLoaded = info.length > 0;

  let summary = '';
  if (isFirstItemLoaded) {
    summary = info[0].summary.length > MAX_SUMMARY_LENGTH
        ? info[0].summary.slice(0, MAX_SUMMARY_LENGTH) + " ..." // 최대 길이 이후에는 "..." 추가
        : info[0].summary;
  }
  
  return (
    <div className="container max-w-screen-lg mx-auto">
        {/* "거래소 바로가기" 상자 */}
        <div className="exchange-box">
            <p>거래소 바로가기</p>
            <ul>
              <li><a href="https://upbit.com/" data-number="1">&nbsp;&nbsp;업비트(Upbit)</a></li>
              <li><a href="https://www.bithumb.com/" data-number="2">&nbsp;&nbsp;빗썸(Bithumb)</a></li>
              <li><a href="https://coinone.co.kr/" data-number="3">&nbsp;&nbsp;코인원(coinone)</a></li>
              <li><a href="https://lightning.korbit.co.kr/" data-number="4">&nbsp;&nbsp;코빗(Korbit)</a></li>
              <li><a href="https://www.gopax.co.kr/" data-number="5">&nbsp;&nbsp;고팍스(GOPAX)</a></li>
            </ul>
        </div>
        <div className="exchange-box2">
            <p>실시간 TOP10🔥</p>
            <ul>
                {top10Numbers.map((number) => (
                    <li key={number}>
                        <a data-number={number}>&nbsp;&nbsp;
                            <span style={{ fontWeight: 600 }}>{coins[number - 1]?.name}{'('}{coins[number - 1]?.symbol}{')'}</span>
                            <span>
                              <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              {Number(coins[number - 1]?.quotes?.KRW?.price.toFixed(1)).toLocaleString()}원&nbsp;&nbsp;
                                {coins[number - 1]?.quotes.KRW.percent_change_24h >= 0 ? (
                                    <span style={{ color: '#FF3333' }}>
                                        +{coins[number - 1]?.quotes.KRW.percent_change_24h.toFixed(2)}%
                                    </span>
                                ) : (
                                    <span style={{ color: '#0066FF' }}>
                                        {coins[number - 1]?.quotes.KRW.percent_change_24h.toFixed(2)}%
                                    </span>
                                )}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <div className="exchange-box3">
            <p>
              <img
                  alt='Ads Image'
                  src="https://blog.kakaocdn.net/dn/vQUdu/btqvTUJOpaD/F6l3qRXedNPB3mGNmmuOY1/img.png"
              />
            </p>
        </div>
        <br></br>
        <table className="min-w-full table-auto text-gray-800">
        <thead className='justify-between'>
            <tr className='bg-white px-4 py-3'>
            </tr>
        </thead>
        {isFirstItemLoaded && ( // 조건부 렌더링
        <tr className='bg-white'>
          <td className='px-4 py-3' style={{ fontWeight: 600, fontSize: '16px' }}>{info[0].news_id}</td>
          <Link key={info[0].news_id} to={`/news/detail/${info[0].news_id}`}>
            <td className='px-4 py-3'>
              <span style={{ fontWeight: 600, fontSize: '24px' }}>{info[0].news_title}</span>
              <br />
              <span style={{ fontWeight: 300, fontSize: '14px' }}>
                00일보 | {info[0].view} | {info[0].create_date}
                <br></br>
                {summary}
              </span>
            </td>
          </Link>
          <td className={`px-4 py-3 ${info[0].isRightAligned ? 'right-align' : ''}`}>
            <img
              alt='News Image'
              src={info[0].thumb_url}
              style={{
                width: '3600px',
                maxHeight: '3500px',
                objectFit: 'cover',
              }}
            />
          </td>
        </tr>
        )}
        </table>
        <table className="min-w-full table-auto text-gray-800">
        <thead className='justify-between'>
            <tr className='bg-white px-4 py-3'>
            {/* 동적으로 토큰 버튼 생성
            {coins.map((coin, index) => (
                <th key={index}>
                    <button
                        className="w-btn w-btn-blue"
                        type="button"
                        style={{
                            background: coin.quotes.KRW.percent_change_24h >= 0
                                ? '#F0D4D4'
                                : 'transparent', // 변경할 배경색
                        }}
                    >
                        {coin.symbol}&nbsp;
                        {coin.quotes.KRW.percent_change_24h >= 0 ? (
                        <span style={{ color: '#FF3333' }}>
                            +{coin.quotes.KRW.percent_change_24h.toFixed(2)}%
                        </span>
                        ) : (
                        <span style={{ color: '#0066FF' }}>
                            {coin.quotes.KRW.percent_change_24h.toFixed(2)}%
                        </span>
                        )}
                    </button>
                </th>
            ))} */}
            </tr>
        </thead>
        <ListTr info={info}/>
        </table>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}

export default Lists;