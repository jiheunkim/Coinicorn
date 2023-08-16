import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../Lists.css';
import { useParams } from 'react-router-dom';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import RightBar from "../RightBar";
import { Link } from 'react-router-dom';

const Detail = () => {
  const params = useParams();
  const { id } = params;
  const { news_id } = params; // URL 매개변수로부터 news_id 값을 가져옴
  const [news, setNews] = useState({});

  useEffect(() => {
    axios.post(`http://115.85.181.240:8000/blockchain/${id}/`)
    .then(response => {
      setNews(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [id]);


  const { news_title, content, summary,thumb_url, view, source_name, create_date, tickers, src } = news;

  // if (tickers.includes('[')) {
  //   tickers = tickers.replace(/[\[\]']+/g, '');
  // }

  // top10Numbers와 coins 변수를 정의
  const top10Numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  const coins = []; // 필요한 값을 여기에 넣어야 함

  return (
    <div className="container mx-auto py-8 pl-11" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-base font-semibold text-gray-600 text-left">
          {/* <span className='w-btn w-btn-blue'>{tickers}</span> */}
          &nbsp;&nbsp;&nbsp;
          {formatDate(create_date)}</p>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 text-left">{news_title}</h1>
          <p className="mt-6 text-gray-600 text-left">{source_name} | 조회수 {view} | <Link to={src}>원문보기</Link></p>
        </div>
        <br></br>
        <p className="text-lg text-gray-700">{summary}</p>
        <div className="mt-8 text-center">
          <img
            className="w-full max-w-lg mx-auto rounded-xl"
            src={thumb_url}
            alt="News Thumbnail"
          />
          
        </div>
        <div className="mt-8">
          <p className="mt-8 text-lg text-gray-700">{content}</p>
        </div>
      </div>
      <RightBar top10Numbers={top10Numbers} coins={coins} /> {/* 변수를 전달 */}
    </div>
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

export default Detail;
