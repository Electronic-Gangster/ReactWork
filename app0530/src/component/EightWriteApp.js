import React, { useState } from 'react';

function EightWriteApp({onSave}) {

    const [name, setName] = useState('이승만');
    const [blood, setBlood] = useState('A');
    const [addr, setAddr] = useState('하와이');

    //추가 버튼 이벤트
    const addButton=()=>{
        //onSave({name:name, blood:blood, addr:addr});
        //key와 value가 같으면 한번만 쓰면 된다.
        onSave({name,blood,addr}) //3개의 변수 값에 객체 형태로 data를 변수에 저장한다.
    }

    return (
        <div style={{marginBottom:'15px'}}>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
            <input type='text' value={blood} onChange={(e)=>setBlood(e.target.value)}/><br/>
            <input type='text' value={addr} onChange={(e)=>setAddr(e.target.value)}/><br/>
            <button type='button' onClick={addButton}
            >추가</button>
        </div>
    );
}

export default EightWriteApp;