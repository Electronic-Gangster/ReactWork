import React, { useState } from 'react';
import './MyStyle.css';

function FifthCmp(props) {
    const [name,setName]=useState("윤석열");
    const [addr,setAddr]=useState("용산구");

    return (
        <div>
            <h2 className='title'>5번째 컴포넌트</h2>
            <div style={{fontSize:'2em', fontFamily:'monospace'}}>
                이 름 : {name} <br></br>
                주 소 : {addr}
            </div>

            <input type='text' value={name} placeholder='이름입력'
            onChange={(e)=>{
                setName(e.target.value);
            }}/>
            <br></br>
            <br></br>

            <input type='text' value={addr} placeholder='주소입력' onChange={(e)=>{
                setAddr(e.target.value);
            }}/>
        </div>
    );
}


export default FifthCmp;