import React, { useState, useRef } from 'react';
import './foodstyle.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import img from '../image/kk.gif';


function FoodForm(props) {

    const [foodPhoto, setFoodPhoto] = useState([]);

    const [fname, setFname] = useState('');
    const [fhp, setFhp] = useState('');
    const [bookingday, setBookingday] = useState('');

    const contentRef = useRef();
    
    const navi = useNavigate();
    const photourl1=process.env.REACT_APP_FOODSMALLURL;
    const photourl2=process.env.REACT_APP_FOODSMALLURL2;

    //파일 업로드 이벤트
    const fileUploadEvent=(e)=>{
        //파일 갯수가 3개가 넘을 경우 이벤트 종료
        if(e.target.files.length>3){
            alert('파일은 3개까지만 업로드 가능합니다.');
            return;
        }

        const upload = new FormData();
        for(let i=0; i<e.target.files.length; i++){
            upload.append("upload", e.target.files[i]); //여러개의 경우라서 배열로 처리
        }

        //스프링 서버로 보내고 업로드된 파일명 리턴받기
        Axios({
            method:'post',
            url:"/react/upload",
            data:upload,
            headers:{"Content-Type":"multipart/form-data"}  //파일 업로드시 필수
        }).then(res=>{
            setFoodPhoto(res.data);
        })
    }

    //submit 이벤트 발생시 호출 함수
    const onSubmitEvent=(e)=>{
        //기본 이벤트를 무효화(action 호출을 막기 위해서)
        e.preventDefault();
        
        //유효성 검사
        if(foodPhoto.length===0){       //사진이 없을 경우
            alert('사진을 업로드 하세요');
            return;
        }
        
        //하고 싶은말 이벤트
        const fcontent = contentRef.current.value;
        //서버에 보내기
        Axios.post("/react/insert",{fname,fhp,fcontent,bookingday})
        .then(res=>{
            
            //목록페이지로 이동
            navi("/food/list");
            
            //값이 연결 되어있을 경우 이런식으로 초기화 할것
            //setFname('');
            //setFhp('');
            //setBookingday('');
            //contentRef.current.value='';
        })
    }
    

    return (
        <div className='foodcontainer'>
            <button type='button' className='btn btn-outline-success' onClick={()=>navi("/food/list")}>예약목록</button>
            <hr/>
            <input type='file' style={{display:'none'}} id='file' multiple
            onChange={fileUploadEvent}/>
            
            <b>사진을 업로드하고 싶으면 여길 클릭하시오.</b><br/>
            
            <img alt='' src={img} style={{fontSize:'30px', cursor:'pointer', width:'200px'}}
            onClick={()=>document.getElementById("file").click()}/>

            <br/><br/><br/>

            <h5>업로드한 사진 미리보기</h5>
            <div>
                {
                    foodPhoto.map((photo,idx)=>
                    <img key={idx} alt='' src={`${photourl1}${photo}${photourl2}`}
                    style={{border:'2px solid red', borderRadius:'30px', marginRight:'10px'}}/>)
                }
            </div>

            <h5>예약에 필요한 나머지 정보 입력</h5>
            <form onSubmit={onSubmitEvent}>
                <table className='table' style={{width:'400px'}}>

                    <tr>
                        <th style={{width:'100px',backgroundColor:'#ddd', textAlign:'center'}}>예약자 이름</th>
                        <td>
                            <input type='text' className='form-control' 
                            placeholder='이름을 입력하시오' onChange={(e)=>setFname(e.target.value)}
                            required/>
                        </td>
                    </tr>

                    <tr>
                        <th style={{width:'100px',backgroundColor:'#ddd', textAlign:'center'}}required >휴대폰</th>
                        <td>
                            <input type='text' className='form-control' 
                            placeholder='네 전화번호' onChange={(e)=>setFhp(e.target.value)}/>
                        </td>
                    </tr>

                    <tr>
                        <th style={{width:'100px',backgroundColor:'#ddd', textAlign:'center'}}
                        >예약 날짜</th>
                        <td>
                            <input type='date' className='form-control' onChange={(e)=>setBookingday(e.target.value)}/>
                        </td>
                    </tr>

                    <tr>
                        <th style={{width:'100px',backgroundColor:'#ddd', textAlign:'center'}}>남기는 말씀</th>
                        <td>
                            <textarea ref={contentRef} className='form-control'
                            style={{width:'100%',height:'100px'}}/>
                        </td>
                    </tr>

                    <tr style={{height:'80px'}}>
                        <td colSpan={2} align='center'>
                            <button type='submit' className='btn btn-outline-info'>DB저장</button>
                            
                            <button type='reset' className='btn btn-outline-danger'
                            style={{marginLeft:'30px'}}>초기화</button>
                        </td>
                    </tr>

                </table>
            </form>

        </div>
    );
}

export default FoodForm;