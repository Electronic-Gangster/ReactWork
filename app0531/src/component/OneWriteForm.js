import {TextField, Button} from '@material-ui/core';
import React from 'react';
import InputEmojiWithRef from "react-input-emoji";
import {useState} from 'react';

function OneWriteForm({onSave}) {
    const [irum,setIrum] = useState('');
    const [message, setMessage] = useState('');

    const handleOnEnter = (text) => {
        setMessage(text);
        console.log(text);
    }

    return (
        <div>
            <TextField id="outlined-basic" label="이름" variant="outlined" value={irum} onChange={(e)=>setIrum(e.target.value)}/>
            &nbsp;&nbsp;
            <Button variant="contained" onClick={()=>{
                if(irum===''){
                    alert('이름을 입력하세요.');
                    return;
                }

                if(message===''){
                    alert('메세지를 입력하세요.');
                    return;
                }

                //부모 컴포넌트로 입력 데이터를 보낸다.
                onSave({irum,message});
                setIrum(''); //입력 후 초기화
                setMessage(''); //입력 후 초기화
            }}>등록</Button>
            
            <br/><br/>

            <InputEmojiWithRef
                cleanOnEnter="cleanOnEnter"
                onEnter={handleOnEnter}
                placeholder="만든라면!"/>
        </div>
    );
}

export default OneWriteForm;