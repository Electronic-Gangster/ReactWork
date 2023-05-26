import React, { useState } from 'react';
import '../App.css';
import us1 from '../image/1.png';


function OneComponent(props) {
    const [usName1, setUsName1] = useState("조지워싱턴");
    const [usName2, setUsName2] = useState("제임스K포크");
    
    //출력은 가능하지만 수정은 할 수 없다.
    let message="Have a Good Day!!!";
    
    return (
        <div>
            <h5 style={{border:'3px solid gray', backgroundColor:'#add836'}}>
                OneComponent 실습
            </h5>
            <h3 className='one two'>{message}</h3>

            <h5>import를 이용해서 src 이미지 가져오기</h5>
            <img alt='' src={us1} width={200}/>
            
            <b>{usName1}</b>
            
            <br/>
            
            <h5>require를 이용해서 src 이미지 가져오기</h5>
            <img alt='' src={require(`../image/11.png`)} width={200}></img>

            <b>{usName2}</b>
            
            <hr/>

            <div className='input-group'>
                <input type='text' className='form-control' placeholder='초대 대통령'
                onKeyUp={(e)=>{
                    setUsName1(e.target.value);
                }}/>

                <input type='text' className='form-control' placeholder='대통령 이름 - 엔터'
                onKeyUp={(e)=>{
                    if(e.key==='Enter'){
                        setUsName2(e.target.value);
                    }
                }}/>
            </div>
        </div>
    );
}

export default OneComponent;