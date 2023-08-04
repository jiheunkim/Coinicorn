import React from 'react';
import DetailContentTd from './DetailContentTd';

const DetailContent = ({info}) => {
    return (
        <tbody>
            {
                info.map(item => {
                    return (
                        <DetailContentTd key={item.news_id} item={item} />
                    )
                })
            }
        </tbody>
    );
};

export default DetailContent;
