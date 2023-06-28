import React, { useState, useRef } from 'react';
import '../App.css';

function ThreeComponent(props) {

    const[count, setCount] = useState(1);
    const countRef = useRef(1);

    console.log("랜더링 중...")

    const stateIncreEvent=()=>{
        setCount(count+1);                          //값이 변경될 때 마다 랜더링이 발생(새로고침이 된다는 뜻)
    }

    const RefIncreEvent=()=>{
        countRef.current = countRef.current + 1;    //값이 변경될 때 마다 랜더링이 발생하지 않는다.
                                                    //콘솔에 누적되고 있음을 확인할 수 있다.
        console.log("countRef변수값:" + countRef.current); 
    }

    return (
        <div>
            <h2 className='alert alert-warning'>ThreeComponent - useRef</h2>
            <h1 className='wave'>state: {count}</h1>
            <h1 className='wave'>Ref: {countRef.current}</h1>
            <button type='button' className='btn btn-sm btn-outline-info' onClick={stateIncreEvent}>증가 - state 변수 증가</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type='button' className='btn btn-sm btn-outline-danger' onClick={RefIncreEvent}>증가 - countRef 변수 증가</button>
        </div>
    );
}

export default ThreeComponent;