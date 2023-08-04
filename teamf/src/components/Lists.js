import './Lists.css';
import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import ListTr from './ListTr';

const Lists = () => {
    const [info, setInfo] = useState([]);
  
    // 고유 값으로 사용 될 id
    // ref 를 사용하여 변수 담기
    const nextId = useRef(11);

  //데이터 호출
  useEffect(() => {
    axios.post('http://192.168.133.220:8000/blockchain/apitest?format=json')
      .then(response => {
        setInfo(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
    return (
      <div className="container max-w-screen-lg mx-auto">
        <br></br>
        <div className='text-xl font-bold mt-5 mb-3 text-center' style={{ fontSize: '30px', textAlign: 'center', fontFamily: 'Noto Sans KR, sans-serif' }}>
          🔥HOT NEWS🔥
        </div>
        <br></br>
        <table className="min-w-full table-auto text-gray-800">
          <thead className='justify-between'>
            <tr className='bg-gray-800'>
              <th className="text-gray-300 px-4 py-3">Id.</th>
              <th className="text-gray-300 px-4 py-3">Title</th>
              <th className="text-gray-300 px-4 py-3">Image</th>
            </tr>
          </thead>
          <ListTr info={info} />
        </table>
      </div>
    );
}

export default Lists;