import React from 'react';
import { Link } from 'react-router-dom';

const MAX_SUMMARY_LENGTH = 100; // 원하는 최대 요약 길이 설정

const ListTd = ({ item, isFirst }) => {
    if (isFirst) {
        return null; // 첫 번째 항목은 렌더링하지 않음
    }
    
    const summary = item.summary.length > MAX_SUMMARY_LENGTH
        ? item.summary.slice(0, MAX_SUMMARY_LENGTH) + " ..." // 최대 길이 이후에는 "..." 추가
        : item.summary;
    
    return (
        <>
        <tr className='bg-white'>
            <td className='px-4 py-3' style={{ fontWeight: 600, fontSize: '16px' }}>{item.news_id}</td>
            <Link key={item.news_id} to={`/news/detail/${item.news_id}`}>
                <td className='px-4 py-3'>
                    <span style={{ fontWeight: 600, fontSize: '22px' }}>{item.news_title}</span>
                    <br />
                    <span style={{ fontWeight: 300, fontSize: '14px' }}>
                        00일보 | {item.view} | {item.create_date}
                        <br></br>{summary} {/* 요약 내용 표시 */}
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