import React from 'react';
import { Link } from 'react-router-dom';

const ListTd = ({item}) => {
    return (
        <>
        <tr className='"bg-white border-2 border-gray-200'>
            <td className='px-4 py-3'>{item.id}</td>
            <Link to={item.website}>
            <td className='px-4 py-3'>{item.name}(뉴스제목 들어갈 자리)<br></br>{item.email}(뉴스통신사) | {item.phone}(조회수) | (날짜정보)</td>
            </Link>
            <td className={`px-4 py-3 ${item.isRightAligned ? 'right-align' : ''}`}>{item.website}(이미지)</td>
        </tr>
        </>
    )
};

export default ListTd;
