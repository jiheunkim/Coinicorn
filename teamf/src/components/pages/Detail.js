import React, { useEffect, useState } from "react";
import axios from 'axios';
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


  const { news_title, content, summary,thumb_url, view, publisher  } = news;
  const { email, name } = news;

  // top10Numbers와 coins 변수를 정의
  const top10Numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  const coins = []; // 필요한 값을 여기에 넣어야 함

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">{news.create_date}</p>
          <h1 className="mt-4 text-3xl font-bold text-gray-900">{news_title}</h1>
          <p className="mt-6 text-gray-600">조회수: {news.view}</p>
          <p className="text-gray-600">발행한 곳: 00일보</p>
        </div>

        <div className="mt-8 text-center">
          <img
            className="w-full max-w-lg mx-auto rounded-xl"
            src={thumb_url}
            alt="News Thumbnail"
          />
          
        </div>
        <div className="mt-8">
          <p className="text-lg text-gray-700">{summary}</p>
          <p className="mt-8 text-lg text-gray-700">{content}</p>
          <ul className="mt-8 space-y-4 text-gray-600">
            {/* ... */}

              </ul>

          <p className="mt-8 text-lg text-gray-700">Additional Content</p>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">No server? No problem.</h2>
          <p className="mt-2 text-gray-700">More Content</p>
        </div>
      </div>
      <RightBar top10Numbers={top10Numbers} coins={coins} /> {/* 변수를 전달 */}
    </div>
  );
};

export default Detail;
