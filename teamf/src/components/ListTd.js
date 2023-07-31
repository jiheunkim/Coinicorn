import React from 'react';
import { Link } from 'react-router-dom';

const ListTd = ({item}) => {
    return (
        <>
        <tr className='"bg-white border-2 border-gray-200'>
            <td className='px-4 py-3'>{item.news_id}</td>
            <Link key={item.news_id} to={`/news/detail/${item.news_id}`}>
            <td className='px-4 py-3'>{item.news_title}(뉴스제목 들어갈 자리)<br></br>{item.news_title}(뉴스통신사) | {item.view}(조회수) | {item.src}(날짜정보)</td>
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
