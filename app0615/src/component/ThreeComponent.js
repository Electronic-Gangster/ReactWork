import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function ThreeComponent(props) {
    const [irum,setIrum]=useState('');
    const [message,setMessage]=useState('');
    const [list,setList]=useState([]);
    
    //전체 데이타 출력
    const dataListEvent=()=>{
        // let url="http://localhost:9000/test/list";
        let url="/test/list"; //package.json에 proxy 설정
        Axios.get(url)
        .then(res=>{
            setList(res.data);
        })
    }

    //처음 실행시 list 함수 딱 한번만 호출
    useEffect(()=>{
        dataListEvent();
    },[]);

    //추가 버튼 이벤트
    const addDataEvent=()=>{
        let url="/test/insert";
        Axios.post(url,{irum,message})
        .then(res=>{
            alert(res.data);
            setIrum('');
            setMessage('');
            //목록 다시 호출
            dataListEvent();
        })
        .catch(err=>alert(err));
    }

    //삭제 함수
    const deletData = (num)=>
    {
        //alert(num);
        
        //방법1: get방식 파라미터로 num값 전달하는 경우
        // let url="/test/delete?num="+num;
        // Axios.delete(url)
        // .then(res=>{
        //     alert(res.data);            //삭제된 갯수
        //     dataListEvent();            //목록 다시 호출
        // })
        // .catch(err=>alert(err));        //에러 메세지

        //방법2: url로 num값을 넣는 방법
        let url = `/test/delete/${num}`;
        Axios.delete(url)
        .then(res=>{
            alert(res.data);            //삭제된 갯수
            dataListEvent();            //목록 다시 호출
        })
        .catch(err=>alert(err));        //에러 메세지
    }


    return (
        <div>
            <h2 className='alert alert-info bb'>Three Component - 데이터베이스 연결 테스트</h2>

            <h4 style={{marginLeft:"20px"}}>데이터 추가하기</h4>
            <div style={{marginLeft:"20px"}}>
                <input type='text' onChange={(e)=>setIrum(e.target.value)}
                placeholder='이름 입력' style={{width:'120px'}} value={irum}/>

                <input type='text' onChange={(e)=>setMessage(e.target.value)}
                placeholder='메세지 입력'  value={message}
                style={{width:'200px',marginLeft:'10px'}}/>

                <button type='button' className='btn btn-info btn-sm'
                style={{marginLeft:'10px'}} onClick={addDataEvent}>데이터베이스 추가</button>
            </div>
            
            <br></br>
            
            <div style={{marginLeft:"20px"}}>
                <h4>테스트 데이터베이스 내용 전체 출력</h4>
                {
                    list.map((data,idx)=><div>
                        이름 : {data.irum}, &nbsp; 메세지 : {data.message}, &nbsp; 날짜 : {data.writeday}
                        &nbsp;
                        <button type='button' style={{marginLeft:'10px'}} onClick={()=>{
                            deletData(data.num);
                        }} className='bb2'>컷!</button>
                    </div>)
                }
            </div>
        </div>
    );
}

export default ThreeComponent;