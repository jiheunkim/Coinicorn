import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [info, setInfo] = useState({});
  const params = useParams();
  const { id } = params; // URL 매개변수로부터 news_id 값을 가져옴
  const [news, setNews] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((result) => setNews(result));
  }, [id]); // id가 변경될 때마다 useEffect가 호출되도록 함

  const { name, email } = news;

  return (
    <div className="container max-w-screen-lg mx-auto">
      <br></br>
      <div className='text-xl font-bold mt-5 mb-3 text-center' style={{ fontSize: '30px', textAlign: 'center', fontFamily: 'Noto Sans KR, sans-serif' }}>
        🔥🔥
      </div>
      <br></br>
      <table className="min-w-full table-auto text-gray-800">
        <thead className='justify-between'>
          <tr className='bg-gray-800'>
            <th className="text-gray-300 px-4 py-3">{id}</th>
            <th className="text-gray-300 px-4 py-3">{name}</th>
            <th className="text-gray-300 px-4 py-3">{email}</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Detail;