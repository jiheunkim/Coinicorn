import React from 'react';
import ListTd from './ListTd';

const ListTr = ({info}) => {
    return (
        <tbody>
            {
                info.map(item => {
                    return (
                        <ListTd key={item.news_id} item={item} />
                    )
                })
            }
        </tbody>
    );
};

export default ListTr;
