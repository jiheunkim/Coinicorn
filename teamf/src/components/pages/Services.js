import '../../App.css';
import '../Servicepage.css';
import React, { useState } from "react";
import axios from "axios";


function Services() {
  // const [text, setText] = useState("없음");
  
  // const clicked = () => {
  //   axios
  //     .get("http://192.168.135.207:8000/", {
  //       params: {
  //         abc: "가나다",
  //       },
  //     })
  //     .then((response) => setText(JSON.stringify(response.data)));
  // };

  return (
    <div className="services">
    <video src="/videos/video-2.mp4" autoPlay loop muted />
    <div className='service-row1'>
      <div className="service-card1">
        
        <p className='p1'>
        해외의 가상화폐 이슈 하나하나 찾아보기 힘드셨죠?
        </p>
        <p className='pp1'>
        Coinicorn
        </p>
        <p className='ppp1'>
        이 대신 해드립니다.
        </p>
        <p className='pppp1'>

        달라진 시각, 달라진 접근
        </p>
      </div>

      <div className="service-card2">
        <h2>Service 1</h2>
        <p className='p2'>
          해외 소식도 한국어로
        </p>
        <p className='pp2'>
          한 단어 한 단어 번역하면서 읽던 과거 해외 뉴스
        </p>
        <p className='ppp2'>
          이제 한국어로 접하세요.
        </p>
      </div>
    </div>

    <div className='service-row2'>
      <div className="service-card3">
        <h2>Service 2</h2>
        <p className='p3'>
          시간이 없다면 요약본으로
        </p>
        <p className='pp3'>
          Chat-GPT
        </p>
        <p className='ppp3'>
          기술을 활용한
        </p>
        <p className='pppp3'>
          요약본으로 이동시간에도 편하게 확인!
        </p>
      </div>

      <div className="service-card4">
        <h2>Service 3</h2>
        <p className='p4'>
          아는만큼 보인다
        </p>
        <p className='pp4'>
          다양한 정보 습득으로 향상되는
        </p>
        <p className='ppp4'>
          정확도와 수익률을 경험해보세요!
        </p>
      </div>
      </div>
  </div>
    
  );
}

export default Services;