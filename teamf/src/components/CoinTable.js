import React from 'react';

const CoinTable = ({ coin }) => {
  return (
	<>
        <tr className='"bg-white border-2 border-gray-200'>
            <td className='px-4 py-3'>{coin.rank}</td>
            <td className='px-4 py-3'>{coin.name}</td>
			<td className='px-4 py-3'>{coin.symbol}</td>
            <td className='px-4 py-3'>
				₩{Number(
                  coin.quotes.KRW.price.toFixed(1)
                ).toLocaleString()}</td>
			<td className='px-4 py-3'>
				{(
                  coin.quotes.KRW.market_cap / 1000000000000
                ).toFixed(2)}
                T
			</td>
            <td className='px-4 py-3'>
				{(
                  coin.quotes.KRW.volume_24h / 1000000000000
                ).toFixed(2)}
                T</td>
			<td className='px-4 py-3'>{coin.quotes.KRW.percent_change_24h.toFixed(2)}%</td>
            <td className='px-4 py-3'>{coin.quotes.KRW.percent_change_7d.toFixed(2)}%</td>
        </tr>
        </>
  );
}

export default CoinTable;