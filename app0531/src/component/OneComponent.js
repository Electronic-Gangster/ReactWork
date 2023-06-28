import React, { useState } from 'react';
import OneWriteForm from './OneWriteForm';
import OneArrayList from './OneArrayList';

function OneComponent(props) {

    const [list,setList] = useState([
        {irum:"윤석열", message:"반갑습니다.", today:new Date()},
        {irum:"바이든", message:"날리면", today:new Date()},
    ]);

    //추가 이벤트
    const addListHandler = (data) => {
        setList(list.concat({
            ...data,
            today: new Date()
        }));
    }

    //삭제 이벤트
    const onDelete=(idx)=>{
        setList(list.filter((data,i)=>(i!==idx)));
    }

    return (
        <div>
            <h2 className='alert alert-info'>OneComponent - 간단 방명록</h2>
            <OneWriteForm onSave={addListHandler}/>
            <hr/>
            {
                list.map((ele,idx)=><OneArrayList key={idx} idx={idx} row={ele} onDelete={onDelete}/>)
            }
        </div>
    );
}

export default OneComponent;