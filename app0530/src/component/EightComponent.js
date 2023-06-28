import React, { useState } from 'react';
import '../App.css';
import EightArrayApp from './EightArrayApp';
import EightWriteApp from './EightWriteApp';


function EightComponent(props) {

    const [array, setArray] = useState([
        {"name":"윤석열", "blood":"A", "addr":"서울"},
        {"name":"문재인", "blood":"B", "addr":"대전"},
        {"name":"박근혜", "blood":"O", "addr":"대구"},
        {"name":"이명박", "blood":"AB", "addr":"부산"}
    ]);

    //삭제 함수
    const deleteData=(idx)=>{
        setArray(array.filter((ele,i)=>i!==idx));
    }

    //배열에 추가 하는 함수
    const addData=(data)=>setArray(array.concat(data));

    return (
        <div>
             <h2 className='alert alert-secondary'>EightComponent-부모자식연결, 배열 데이터 활용하기</h2>
             <EightWriteApp onSave={addData}/>
             
             <table className='table table-bordered wave' style={{width:'400px', margin:'0 auto'}}>
                <thead>
                    <tr style={{backgroundColor:'skyblue'}}>
                        <th width="60">번호</th>
                        <th width="70">이름</th>
                        <th width="70">혈액형</th>
                        <th width="100">주소</th>
                        <th width="60">삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        array.map((ele,idx)=>(<EightArrayApp key={idx} row={ele} idx={idx} onDelete={deleteData}/>))
                    }
                </tbody>
             </table>
        </div>
    );
}

export default EightComponent;