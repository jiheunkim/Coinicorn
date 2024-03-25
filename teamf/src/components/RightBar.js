import React, { useEffect, useState } from "react";
import axios from 'axios';

const MAX_SUMMARY_LENGTH = 150;

const RightBar = () => {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios.post('http://115.85.181.240:8000/blockchain/apitest')
            .then(response => {
                setInfo(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

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
            });
    }, []);

    const top10Numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    const isFirstItemLoaded = info.length > 0;

    let summary = '';
    if (isFirstItemLoaded) {
        summary = info[0].summary.length > MAX_SUMMARY_LENGTH
            ? info[0].summary.slice(0, MAX_SUMMARY_LENGTH) + " ..."
            : info[0].summary;
    }

    return (
        <div className="container max-w-screen-lg mx-auto">
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
                                    <br />
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
            {/* <div className="exchange-box3" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <img
                    alt='Ads Image'
                    src="https://blog.kakaocdn.net/dn/vQUdu/btqvTUJOpaD/F6l3qRXedNPB3mGNmmuOY1/img.png"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </div> */}
        </div>
    );
}

export default RightBar;
