import React, { useRef, useState } from 'react';
import '../App.css';

function FiveComponent(props) {

    const [msg, setMsg] = useState(''); //결과 메시지를 저장할 state 변수

    const nameRef=useRef('');           //이름을 저장할 ref 변수
    const javaRef=useRef(0);            //자바점수를 저장할 ref 변수
    const sqlRef=useRef(0);             //mysql점수를 저장할 ref 변수
    const springRef=useRef(0);          //spring점수를 저장할 ref 변수

    //버튼 이벤트 처리 함수
    const buttonEvent=()=>{             //함수를 변수에 저장할 수 있다.
        let name=nameRef.current.value;
        let java=Number(javaRef.current.value);
        let sql=Number(sqlRef.current.value);
        let spring=Number(springRef.current.value);

        let total=java+sql+spring;
        let avg=total/3;

        let s=`
        [시험결과확인]
        이름 : ${name}님
        자바 : ${java}점
        mysql : ${sql}점
        spring : ${spring}점
        총점 : ${total}점
        평균 : ${avg.toFixed(3)}점
        `;

        setMsg(s);

        //결과 출력 후 초기화
        nameRef.current.value='';
        javaRef.current.value='';
        sqlRef.current.value='';
        springRef.current.value='';

        nameRef.current.focus();

        
    }

    return (
        <div>
            <h2 className='alert alert-success'>FiveComponent - useRef 활용 문제</h2>
            <div style={{width:'600px'}}>
                <div style={{float:'left', width:'350px'}}>
                    이름 : <input type='text' ref={nameRef}/> <br/>
                    자바 : <input type='text' ref={javaRef}/> <br/>
                    mysql : <input type='text' ref={sqlRef}/> <br/>
                    spring : <input type='text' ref={springRef}/> <br/>
                    <br/>

                    <button type='button' onClick={()=>{
                        setMsg(buttonEvent);
                    }}>결과확인</button>
                </div>

                <div style={{float:'right', whiteSpace:'pre-line'}}>
                   {msg}
                </div>
            </div>
        </div>
    );
}

export default FiveComponent;