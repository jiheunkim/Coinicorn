import React from 'react';
import { Link } from 'react-router-dom';

const ListTd = ({item}) => {
    return (
        <>
        <tr className='"bg-white border-2 border-gray-200'>
            <td className='px-4 py-3'>{item.news_id}</td>
            <Link key={item.news_id} to={`/news/detail/${item.news_id}`}>
            <td className='px-4 py-3'>{item.news_title}(뉴스제목)<br></br>{item.src} | {item.view} | {item.create_date}</td>
            </Link>
            <td className={`px-4 py-3 ${item.isRightAligned ? 'right-align' : ''}`}>
                <img
                    alt='News Image'
                    src={item.thumb_url}
                />
            </td>
        </tr>
        </>
    )
};

export default ListTd;
