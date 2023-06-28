import React, { useRef, useState } from 'react';
import '../App.css';

function FourComponent(props) {

    const [content, setContent] = useState('');
    const [content2, setContent2] = useState('');

    const contentRef = useRef('');  //ref 객체 생성

    console.log("랜더링 중...");

    return (
        <div>
            <h2 className='alert alert-success'>FourComponent - useRef 심화</h2>
            <textarea style={{width:'300px',height:'100px'}} onChange={(e)=>{
                setContent(e.target.value);
            }}></textarea>
            <h4 className='alert alert-danger wave'>{content}</h4>
            {/* 한글자 한글자 입력할 때 마다 랜더링(새로고침)이 발생한다. */}
            
            <hr/>
            
            <textarea style={{width:'300px', height:'100px'}} ref={contentRef}></textarea>
            <br></br>
            <button type='button' onClick={()=>{
                setContent2(contentRef.current.value);
            }}>ref content 적용</button>
            <h4 className='alert alert-info wave'>{content2}</h4>
            {/* 입력을 하다가 버튼을 누르면 content2에 값이 들어가면서 랜더링(새로고침)이 발생한다. */}
        </div>
    );
}

export default FourComponent;