import { TextField } from '@mui/material';
import React from 'react';
import {useState} from 'react';

function SixWriteForm({addData}) {
    
    const [data,setData]=useState({
        irum:"",blood:"",hp:""
    });

    //체인지 이벤트
    const changeEvent=(e)=>{
        let {name,value}=e.target;

        //입력한 항목만 변경
        setData({
            ...data, /* 나머지 항목은 그대로 유지, 밑에 입력 값만 변경 */
            [name]:value
        })
    }

    return (
        <div>
            <div>
                이름 : {data.irum}, 혈액형 : {data.blood}, 연락처 : {data.hp}
            </div>

           이름 : <input type='text' name='irum' size={5} onChange={changeEvent}/> &nbsp;&nbsp;

           혈액형 : <input type='text' name='blood' size={5} onChange={changeEvent}/> &nbsp;&nbsp;

           연락처 : <input type='text' name='hp' size={10} onChange={changeEvent}/> &nbsp;&nbsp;

           <button type='button' onClick={()=>addData(data)}>추가</button>
        </div>
    );
}

export default SixWriteForm;