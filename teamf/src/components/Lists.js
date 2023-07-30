import React from 'react';
import './Lists.css';
import ListItem from './ListItem';

function Lists() {
  return (
    <div className='lists'>
      <h1>🔥HOT</h1>
      <div className='lists__container'>
        <div className='lists__wrapper'>
          <ul className='lists__items'>
            <ListItem
              src='https://blog.btcc.com/wp-content/uploads/2023/01/upbit_facebook-1024x535.png'
              text='카카오 스탁과 두나무에 의해 운영되고 있는 현재 대한민국에서 가장 대표적이고 유명한 코인 거래소이다.'
              label='업비트(Upbit)'
              path='https://upbit.com/'
            />
            <ListItem
              src='https://biz.chosun.com/resizer/dUDujzhaSC3RqHidKTXi02J13to=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/XSQOBKFV2RDGFP3T3VPFF4IBPQ.jpg'
              text='한때 세계 거래량 1위를 차지하기도 했었던 한국 최장수 플랫폼이다.'
              label='빗썸(Bithumb)'
              path='https://www.bithumb.com/react/'
            />
          </ul>
          <ul className='cards__items'>
            <ListItem
              src='https://blog.btcc.com/wp-content/uploads/2023/01/%E6%9C%89%E5%BA%A620230103164348.png'
              text='2014년 설립된 한국의 가상자산 코인 거래소이다.'
              label='코인원(coinone)'
              path='https://coinone.co.kr/'
            />
            <ListItem
              src='https://i.ytimg.com/vi/B-fDsqk4-4M/maxresdefault.jpg'
              text='2013년 한국 최초로 설립된 암호화폐(코인) 거래소로 유일하게 2013년 말의 비트코인 점핑을 경험했다.'
              label='코빗(Korbit)'
              path='https://lightning.korbit.co.kr/'
            />
            <ListItem
              src='https://blog.btcc.com/wp-content/uploads/2023/01/gopax-introduction-1024x512.jpg'
              text='2017년 11월 13일에 출시한 한국 가상화폐 거래소이다.'
              label='고팍스(GOPAX)'
              path='https://www.gopax.co.kr/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Lists;