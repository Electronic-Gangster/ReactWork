import React, { useState } from 'react';
import './App.css';
import OneComponent from './component/OneComponent';
import TwoComponent from './component/TwoComponent';
import ThreeComponent from './component/ThreeComponent';
import FourComponent from './component/FourComponent';
import FiveComponent from './component/FiveComponent';
import SixComponent from './component/SixComponent';

function App() {
  const [idx, setIdx] = useState(1);

  // select 이벤트 처리 함수
  const changeComponent = (e) => {
    setIdx(Number(e.target.value));
  };

  return (
    <div className="App">
      <h2 className="" style={{ marginTop: '30px', textAlign:"center", marginBottom:"30px" }}>
        2023-06-15 리액트 수업 5일차
      </h2>
      <select
        className="form-select"
        style={{ width: '200px', margin: '0 auto' }}
        onChange={changeComponent}
      >
        <option value={1}>OneComponent</option>
        <option value={2}>TwoComponent</option>
        <option value={3}>ThreeComponent</option>
        <option value={4}>FourComponent</option>
        <option value={5}>FiveComponent</option>
        <option value={6}>SixComponent</option>
      </select>
      <br />
      <br />
      {idx === 1 ? (
        <OneComponent />
      ) : idx === 2 ? (
        <TwoComponent />
      ) : idx === 3 ? (
        <ThreeComponent />
      ) : idx === 4 ? (
        <FourComponent />
      ) : idx === 5 ? (
        <FiveComponent />
      ) :(
        <SixComponent />
      ) }
    </div>
  );
}

export default App;
