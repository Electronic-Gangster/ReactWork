import React, { useEffect, useState } from 'react';
import FiveWriteForm from './FiveWriteForm';
import FiveRowList from './FiveRowList';
import Axios from 'axios';

function FiveComponent(props) {
    const [memoList,setMemoList]=useState([]);

    //출력 이벤트(검색 수정)
    const handleMemoList=(search="")=>{
        const url="/memo/list?search="+search;
        Axios.get(url)
        .then(res=>{
            setMemoList(res.data);
        })
    }

    //처음 시작시 전체 메모 출력(딱 한번)
    useEffect(()=>{
        handleMemoList();
    },[]);

    //저장 이벤트
    const handleSaveMemo=(memo)=>{
        console.log(memo)
        Axios.post("/memo/insert",memo)
        .then(res=>{
            handleMemoList();
        })
    }

    //삭제 이벤트
    const handleDeleteMemo=(num)=>{
        const url="/memo/delete?num="+num;
        Axios.delete(url)
        .then(res=>{
            //삭제후 다시 출력
            handleMemoList();
        })
    }
    return (
        <div>
            <h2 className='alert alert-danger'>Five Component-Memo</h2>
            <FiveWriteForm onSave={handleSaveMemo}/>
            <hr/>
            <div className='input-group' style={{width:'500px',marginBottom:'10px'}}>
                <b>메시지 검색</b>
                <input type='text' className='form-control' style={{marginLeft:'10px'}} placeholder='검색어를 입력하세요' onChange={(e)=>handleMemoList(e.target.value)}/>
            </div>
            <h4 className='alert alert-success'>총 {memoList.length} 개의 메모가 있습니다</h4>
        
            {
                memoList.map((memo,idx)=><FiveRowList key={idx} memo={memo} 
                onDelete={handleDeleteMemo}/>)
            }
        </div>
    );
}

export default FiveComponent;