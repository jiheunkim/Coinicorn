import './Lists.css';
import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import ListTr from './ListTr';

const Lists = () => {
    const [info, setInfo] = useState([]);
    const [selected, setSelected] = useState('');
    const [modalOn, setModalOn] = useState(false);
  
    // 고유 값으로 사용 될 id
    // ref 를 사용하여 변수 담기
    const nextId = useRef(11);

  //더미 데이터 호출
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setInfo(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
    const handleSave = (data) => {
      //데이터 수정하기
      if (data.id) { //수정 데이터에는 id가 존재
        setInfo(
          info.map(row => data.id === row.id ? {
            id: data.id,
            name: data.name,
            email: data.email,
            phone: data.phone,
            website: data.website,
          } : row))
  
      } else { //바로 추가하기
        // 데이터 추가하기
        setInfo(info => info.concat(
          {
            id: nextId.current,
            name: data.name,
            email: data.email,
            phone: data.phone,
            website: data.website
          }
        ))
        nextId.current += 1;
      }
    }
  
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