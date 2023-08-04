import React from 'react';
import CoinTable from './CoinTable';

const CoinTr = ({coins}) => {
    return (
        <tbody>
            {
                coins.map(coin => {
                    return (
                        <CoinTable key={coin.id} coin={coin} />
                    )
                })
            }
        </tbody>
    );
};

export default CoinTr;
