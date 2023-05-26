import React from 'react';

function FiveComponent(props) {
    const names=["윤석열", "문재인", "박근혜", "이명박", "노무현", "김대중", "김영삼"]
    
    //배열 출력 방법 1번
    const nameList = names.map((item,idx)=>(<li>{idx}:{item}</li>));

    //배열 출력 방법 2번 (잘 사용하지 않음)
    const arrloop=()=>{
        let arr=[];
        for(let i=0; i<names.length; i++){
            arr.push(<h5>{names[i]}</h5>)
        }
        return arr;
    }



    return (
        <div>
            <h5 style={{border:'3px solid gray', backgroundColor:'#add836'}}>
                FiveComponent 실습
            </h5>
            <h5>배열 출력 방법 1번</h5>
            {nameList}
            
            <hr/>
            
            <h5>배열 출력 방법 2번</h5>
            {arrloop()}

            <hr/>

            <h5>배열 출력 방법 3번 - 직접 map으로 출력</h5>
            {
                names.map((item,idx)=>(<h5 key={idx}>{item}</h5>))
            }

            <hr/>
            
            <h5>배열 출력 방법 4번</h5>
            {
                [...new Array(5)].map((item,idx)=><h6>{idx+10}</h6>)
            }

            <hr/>
            <h5>문제 - 15번까지 사진을 출력해보자 </h5>
            {   
                [...new Array(15)].map((item,idx)=><img alt='' src={require(`../image/${idx+1}.png`)} width={100} className="App-logo" style={{
                    animation: 'App-logo-bounce infinite 0.5s linear',
                    animationDelay: `${idx * 0.1}s`,
                  }}></img>)
                
            }
        </div>
    );
}

export default FiveComponent;