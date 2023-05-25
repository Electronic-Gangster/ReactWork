import React from "react";
import './MyStyle.css';
import img3 from './image/13.jpg';

const SecondCmp = () => {                           //함수형 컴포넌트
    return(
        <div>
            <h2 className="title">2번 컴포넌트</h2>
            <h3>윤석열 대통령</h3>
            <h4>함수형 컴포넌트를 이용하여 작성해 보기</h4>
            <img alt="사진1" src={img3} style={{width:'200px'}}></img>
        </div>
    )
}

export {SecondCmp}