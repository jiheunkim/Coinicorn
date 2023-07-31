import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [info, setInfo] = useState({});
  const { id } = useParams(); // URL 매개변수로부터 id 값을 가져옴

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`) // 해당 id를 이용하여 데이터를 가져옴
      .then(response => {
        setInfo(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]); // id가 변경될 때마다 useEffect가 호출되도록 함

  return (
    <section>
      <article>
        <p>
          <strong>{info.id}</strong> {/* 가져온 데이터의 id 값을 사용 */}
        </p>
        <p>{info.email}</p> {/* 가져온 데이터의 email 값을 사용 */}
        <img alt="avatar" src={info.website} /> {/* 가져온 데이터의 website 값을 사용 */}
      </article>
    </section>
  );
};

export default Detail;