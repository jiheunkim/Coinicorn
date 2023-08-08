import './Lists.css';
import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import ListTr from './ListTr';

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
      setCoins(json.slice(0, 7));
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      // 에러 넘버를 확인
      console.log(error.response.status);
    })
  }, [])

  const { symbol, quotes } = coins;
  
  return (
    <div className="container max-w-screen-lg mx-auto">
        <br></br>
        {/* <div className='text-xl font-bold mt-5 mb-3 text-center' style={{ fontSize: '30px', textAlign: 'center', fontFamily: 'Noto Sans KR, sans-serif' }}>
        🔥HOT NEWS🔥
        </div> */}
        <br></br>
        <table className="min-w-full table-auto text-gray-800">
        <thead className='justify-between'>
            <tr className='bg-white px-4 py-3'>
            {/* 동적으로 토큰 버튼 생성 */}
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
            ))}
            </tr>
        </thead>
        <ListTr info={info} />
        </table>
    </div>
  );
}

export default Lists;