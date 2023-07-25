import React, { useState } from 'react';
import axios from 'axios';
import '../../App.css';

const SignUp = () => {
    const [text, setText] = useState("서버 테스트"); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 여기에 로그인 처리 로직을 추가
        // 서버로 이메일과 비밀번호를 전송하여 로그인 처리
        const handleSubmit = (e) => {
            e.preventDefault();
        
            // 사용자가 입력한 이메일과 비밀번호를 객체로 만듦
            const userData = {
            email: email,
            password: password,
            };
        
            // Axios 사용하여 서버에 POST 요청 보내기
            axios
            .post('http://your-django-server-url/api/signup/', userData)
            .then((response) => {
                // 서버에서 받은 응답 처리
                setText(JSON.stringify(response.data)); // 서버 테스트 성공으로 바뀌면 success
                console.log(response.data); // 서버 응답을 콘솔에 출력
            })
            .catch((error) => {
                // 에러 처리 하기
                console.error(error);
            });
        };
  };

  return (
    <div className='sign-up'>
      <form onSubmit={handleSubmit}>
        <h1>{text}</h1>
        <br></br>
        <label htmlFor='email'>Email </label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={handleEmailChange}
          placeholder='Enter your email'
          size='40'
          style={{ width: '300px', fontSize: '1.5rem' }}
        />
        <br></br>
        <label htmlFor='password'>Password </label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={handlePasswordChange}
          placeholder='Enter your password'
          size='40'
          style={{ width: '300px', fontSize: '1.5rem' }}
        />
        <br></br>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
