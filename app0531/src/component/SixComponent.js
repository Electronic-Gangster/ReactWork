import React from 'react';
import {useState} from 'react';
import SixWriteForm from './SixWriteForm';
import SixRowItem from './SixRowItem';

function SixComponent(props) {

    const [data,setData]=useState([
        {"irum":"윤석열","blood":"A","hp":"010-1111-1111"},
        {"irum":"문재인","blood":"B","hp":"010-2222-2222"}
    ]);

    //데이터 추가
    const addDataEvent=(item)=>{
        setData(data.concat(item));
    }

    return (
        <div>
            <h2 className='alert alert-info'>SixComponent - 복습문제</h2>
            <SixWriteForm addData={addDataEvent}/>
            <hr/>
            <h5 className='bb'>{data.length}명 등록</h5>
            {
                data.map((ele,idx)=><SixRowItem key={idx} idx={idx} ele={ele}/>)
            }
        </div>
    );
}

export default SixComponent;