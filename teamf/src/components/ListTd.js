import React from 'react';
import { Link } from 'react-router-dom';

const ListTd = ({ item, isFirst }) => {
    if (isFirst) {
        return null; // 첫 번째 항목은 렌더링하지 않음
    }
    
    return (
        <>
        <tr className='bg-white'>
            <td className='px-4 py-3' style={{ fontWeight: 600, fontSize: '16px' }}>{item.news_id}</td>
            <Link key={item.news_id} to={`/news/detail/${item.news_id}`}>
                <td className='px-4 py-3'>
                    <span style={{ fontWeight: 600, fontSize: '22px' }}>{item.news_title}</span>
                    <br />
                    <span style={{ fontWeight: 300, fontSize: '14px' }}>
                        {item.src} | {item.view} | {item.create_date}
                    </span>
                </td>
            </Link>
            <td className={`px-4 py-3 ${item.isRightAligned ? 'right-align' : ''}`}>
                <img
                    alt='News Image'
                    src={item.thumb_url}
                />
            </td>
        </tr>
        </>
    );
};

export default ListTd;