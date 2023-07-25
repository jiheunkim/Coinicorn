import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [menu1, menu2, menu3, menu4] = useState('메뉴1', '메뉴2', '메뉴3', '메뉴4')

  return (
    <div className="App">
      <div className="black-nav">
        <div>LikeLion</div>
        <h1>{ menu1 }</h1>
      </div>
      <header className="App-header">
        <img src="https://kr.object.ncloudstorage.com/moong-images/005930.png" className="App-logo" alt="logo" />
        <p>
          멋쟁이사자처럼 TeamF
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;