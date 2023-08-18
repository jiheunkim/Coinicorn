import React from 'react';
import '../Servicepage.css';
import ServicesItem from './ServicesItem';
import Footer from '../Footer';
import coinicornlogoimg2 from './coinicornlogoimg2.png';
import worldmap from './worldmap.png'

function Services() {
  return (
    <>
    <div className='cards pl-60 pr-60'>
      <h1 style={{ fontSize: '34px', textAlign: 'center', fontFamily: 'Noto Sans KR, sans-serif',fontWeight: 'bold' }}>
      Coinicorn을 소개합니다
      </h1>
      <div className='services__container'>
        <div className='services__wrapper'>
          <ul className='services__items'>
            <ServicesItem
              src={coinicornlogoimg2}
              text='해외의 가상화폐 이슈 하나하나 찾아보기 힘드셨죠?
              Coinicorn
              이 대신 해드립니다.
              달라진 시각, 달라진 접근
              '
              />

            <ServicesItem
              src={worldmap}
              text='
              해외 소식도 한국어로
              한 단어 한 단어 번역하면서 읽던 과거 해외 뉴스
              이제 한국어로 접하세요.'
            />
          </ul>
          <ul className='services__items'>
            <ServicesItem
              src='https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmVwrYSAuZvRreRhF3Jp7KS2mpbADe7Dd1girQEWJzJYb5/chat-GPT.png'
              text='시간이 없다면 요약본으로
              Chat-GPT
              기술을 활용한
              요약본으로 이동시간에도 편하게 확인!'
            />
            <ServicesItem
              //src='https://ppss.kr/wp-content/uploads/2018/01/008-7.jpg'
              src='https://discover.rbcroyalbank.com/wp-content/uploads/Untitled-design-2023-07-31T120156.242.jpg'
              text='아는만큼 보인다.
              다양한 정보 습득으로 향상되는
              정확도와 수익률을 경험해보세요!'

            />
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </>
    
  );
}

export default Services;