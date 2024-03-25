import React from 'react';
import ListTd from './ListTd';

const ListTr = ({info}) => {
    return (
        <tbody>
            {
                info.map((item, index) => {
                    return (
                        <ListTd key={item.news_id} item={item} isFirst={index === 0} />
                    )
                })
            }
        </tbody>
    );
};

export default ListTr;
