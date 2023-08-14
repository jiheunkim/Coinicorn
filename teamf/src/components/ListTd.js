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
            {/* <td className='px-4 py-3' style={{ fontWeight: 600, fontSize: '16px' }}>{item.news_id}</td> */}
            <Link key={item.news_id} to={`/news/detail/${item.news_id}`}>
                <td className='px-4 py-3 pl-20' style={{ lineHeight: '180%'}}>
                    <span className='w-btn w-btn-blue'>{item.tickers.replace(/[\[\]']+/g, '')}</span>
                    <span style={{ fontWeight: 300, fontSize: '14px' }}>
                        &nbsp;&nbsp;&nbsp;
                        {formatDate(item.create_date)}</span>
                    <br></br>
                    <span style={{ fontWeight: 600, fontSize: '20px' }}>{item.news_title}</span>
                    <br />
                    <span style={{ fontWeight: 300, fontSize: '14px' }}>
                        {item.source_name} | 조회수 {item.view}
                        <br></br>{summary} {/* 요약 내용 표시 */}
                    </span>
                </td>
            </Link>
            <td className={`py-3 pr-20 ${item.isRightAligned ? 'right-align' : ''}`}>
                <img
                    alt='News Image'
                    src={item.thumb_url}
                    style={{
                        width: '400px',
                        maxHeight: '300px',
                        objectFit: 'cover',
                      }}
                />
            </td>
        </tr>
        </>
    );
};

function formatDate(dateString) {
    const today = new Date();
    const targetDate = new Date(dateString);
    const timeDiff = today - targetDate;
    const oneDay = 24 * 60 * 60 * 1000;
  
    if (timeDiff < oneDay) {
      return '오늘';
    } else if (timeDiff < 2 * oneDay) {
      return '어제';
    } else if (timeDiff < 7 * oneDay) {
      const daysAgo = Math.floor(timeDiff / oneDay);
      return `${daysAgo}일 전`;
    } else {
      const month = targetDate.getMonth() + 1;
      const day = targetDate.getDate();
      return `${month < 10 ? '0' : ''}${month}.${day < 10 ? '0' : ''}${day}`;
    }
  }

export default ListTd;