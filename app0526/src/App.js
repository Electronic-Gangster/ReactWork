import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import OneComponent from './components/OneComponent';
import TwoComponent from './components/TwoComponent';
import ThreeComponent from './components/ThreeComponent';
import FourComponent from './components/FourComponent';
import FiveComponent from './components/FiveComponent';
import SixComponent from './components/SixComponent';
import SevenComponent from './components/SevenComponent';
import EightComponent from './components/EightComponent';

function App() {
  const [idx,setIdx] = useState(1);

  //select 이벤트 처리 함수
  const changeComponent = (e) => {
    // alert(e.target.value + typeof(e.target.value));
    
    //setter 함수가 호출 될 때마다 자동으로 랜더링이 발생한다.
    setIdx(Number(e.target.value));
  }

  return (
    <div className="App">
      <h2>2023-05-26 리액트 수업 2일차</h2>
      <select className='form-select' style={{width:'200px', margin:'0 auto'}}
      onChange={changeComponent}>
        <option value={1}>OneComponent</option>
        <option value={2}>TwoComponent</option>
        <option value={3}>ThreeComponent</option>
        <option value={4}>FourComponent</option>
        <option value={5}>FiveComponent</option>
        <option value={6}>SixComponent</option>
        <option value={7}>SevenComponent</option>
        <option value={8}>EightComponent</option>
      </select>
      <br></br><br></br>
      {idx===1?<OneComponent/>:idx===2?<TwoComponent/>:idx===3?<ThreeComponent/>:idx===4?<FourComponent/>:idx===5?<FiveComponent/>:idx===6?<SixComponent/>:idx===7?<SevenComponent/>:<EightComponent/>}
    </div>
  );
}

export default App;
