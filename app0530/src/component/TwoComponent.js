import React, { useEffect, useState } from 'react';
import '../App.css';

function TwoComponent(props) {

    const [nameArray, setNameArray] = useState(["윤석열", "문재인"]);
    const [name, setName] = useState('');

    useEffect(() => {
        setName('');
    },[nameArray]);                             //nameArray 값이 변경되면 name을 초기화

    //1. 이름을 배열에 추가하는 함수 (버튼이벤트)
    const addName = () => {
        //set 메서드를 연속해서 호출할 경우 순차적으로 실행이 안될 수도 있다.
        //그런 경우, 반드시 nameArray가 변경된 후 name이 변경되도록 하려면
        //name은 useEffect()를 이용해서 처리해야 한다.
        setNameArray(nameArray.concat(name));   //concat() : 배열에 추가하는 함수
        setName('');                            //입력창 초기화
    }

    //2. 이름을 배열에서 삭제하는 함수 (버튼이벤트)
    const delName=(idx)=>{
        setNameArray(nameArray.filter((item,i)=>i!==idx));
    }

    return (
        <div>
            <h2 className='alert alert-info'>TwoComponent - 배열 추가, 삭제</h2>
            <div className='input-group' style={{width:'400px'}}>
                <h4 className='alert alert-secondary ' style={{marginLeft:'15px'}}>이름을 입력하세요</h4>
                <input type='text' className='form-control' value={name} onChange={(e)=>{
                    setName(e.target.value);
                }} style={{height:'60px'}}/>

                <button type='button' className='btn btn-sm btn-outline-success' style={{height:'60px'}} onClick={addName}>추가</button>
            </div>

            <hr/>
            {
                nameArray.map((item, idx)=>(
                    <div className='input-group' style={{width:'300px', marginBottom:'10px'}} key={idx}>
                        <h4 style={{width:'200px'}}>{item}</h4>
                        <button type='button' className='btn btn-sm btn-danger' style={{marginLeft:'10px'}} onClick={()=>{
                            delName(idx);                       //delName() 함수 호출
                        }}>삭제</button>
                    </div>

                ))
            }
        </div>
    );
}

export default TwoComponent;