import React, { useEffect, useState } from 'react';
import './Lists.css';
import CoinTr from './CoinTr';

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
function Coins() {
 const [loading, setLoading] = useState(true);
 const [coins, setCoins] = useState([]);

 const refreshPage = () => {
   window.location.reload();
 }

 useEffect(() => {
   fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW")
	 .then(response => response.json())
	 .then(json => {
	   setCoins(json.slice(0, 100));
	   setLoading(false);
	 })
	 .catch((error) => {
	   console.log(error);
	   // 에러 넘버를 확인
	   console.log(error.response.status);
	 })
 }, [])

 return (
	<div className="container max-w-screen-lg mx-auto pl-20 pr-20">
		<br></br>
		<br></br>
		<div className='text-xl font-bold mt-5 mb-3 text-center' style={{ fontSize: '26px', textAlign: 'center', fontFamily: 'Noto Sans KR, sans-serif' }}>
		🔥가상화폐 실시간 TOP 100🔥
		</div>
		<div className="btn" style={{ textAlign: 'right', fontFamily: 'Noto Sans KR, sans-serif' }}>
			<button onClick={ refreshPage }>새로고침</button>
		</div>
		<br></br>
		<table className="min-w-full table-auto text-gray-800" style={{ textAlign: 'center', fontFamily: 'Noto Sans KR, sans-serif' }}>
		<thead className='justify-between'>
			<tr className='bg-gray-100 border-2 border-gray-200'>
				<th className="text-black px-4 py-3">순위</th>
				<th className="text-black px-4 py-3">종목</th>
				<th className="text-black px-4 py-3">기호</th>
				<th className="text-black px-4 py-3">가격(KRW)</th>
				<th className="text-black px-4 py-3">총 시가</th>
				<th className="text-black px-4 py-3">거래량(24H)</th>
				<th className="text-black px-4 py-3">변동(24H)</th>
				<th className="text-black px-4 py-3">변동(7D)</th>
			</tr>
		</thead>
		{
				loading
				? <span className="loader">Loading...</span> 
				: (
					<CoinTr coins={ coins }/>
				)
		}
		</table>
  	</div>
	// <div className="App">
	// 	<section className="coin-tracker">
	// 		<div className="title flex-grid flex-grid--center">
	// 			<h1>암호화폐 실시간 TOP 100</h1>
	// 			<br></br>
	// 			<div className="btn">
	// 				<button onClick={ refreshPage }>새로고침</button>
	// 			</div>
	// 		</div>
	// 		<div className="result">
	// 		{
	// 			loading
	// 			? <span className="loader">Loading...</span> 
	// 			: (
	// 				<CoinTable coins={ coins }/>
	// 			)
	// 		}
	// 		</div>
	// 	</section>
	// </div>
 );
}

export default Coins;