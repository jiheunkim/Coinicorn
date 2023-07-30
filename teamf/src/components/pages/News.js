import '../../App.css';
import React, { useState } from "react";
import Lists from '../Lists';
import Board from '../Board';
import Footer from '../Footer';
import axios from "axios";

function News() {
//   const [text, setText] = useState("없음");
  
//   const clicked = () => {
//     axios
//       .post("http://192.168.135.207:8000/", {
//         params: {
//           abc: "가나다",
//         },
//       })
//       .then((response) => setText(JSON.stringify(response.data)));
//   };

//   return (
//     <div>
//       <h1>{text}</h1>
//       <button onClick={clicked}>클릭</button>
//     </div>
//   );
  return (
    <>
      <Board />
      <Footer />
    </>
  );
}

export default News;