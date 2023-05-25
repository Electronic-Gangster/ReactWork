import React, { useState } from 'react';
import './MyStyle.css';
import { AddAPhoto, AddAlarm, DeleteForeverOutlined, DeleteSharp } from '@mui/icons-material';
import InputEmojiWithRef from 'react-input-emoji';
import { Button } from '@mui/material'; // Button import 추가



function FourthCmp(props) {
    //react에서 값을 변경하려면 반드시 useState를 사용해야한다.
    const [number,setNumber] = useState(1); //number 변수에 초기값을 1로 지정
    return (
        <div>
            <h2 className='title'>4번째 컴포넌트</h2>
            <DeleteSharp></DeleteSharp>
            <DeleteForeverOutlined></DeleteForeverOutlined>
            <AddAPhoto></AddAPhoto>
            <AddAlarm></AddAlarm>

            <InputEmojiWithRef style={{width:'200px'}} placeholder="메시지입력 ㄱㄱ"/>
            <hr/>
            <a className='stylenum'>{number}</a>
            <br/><br/>
            <Button variant="contained" color="success" onClick={()=>{
                if(number===0){
                    alert('0보다 작을 수 없습니다.');
                }else{
                    setNumber(number-1);
                }
                
            }} className='photo1'
            > 감소 </Button>
            
            &nbsp;&nbsp;&nbsp;
            
            <Button variant="contained" color="warning" onClick={()=>{
                if(number<10){
                    setNumber(number+1);
                }else{
                    alert('10보다 클 수 없습니다.');
                }
                
            }} className='photo1'
            > 증가 </Button>
        </div>
    );
}

export default FourthCmp;