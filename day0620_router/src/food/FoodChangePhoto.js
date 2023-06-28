import React, { useState, useRef } from 'react';
import './foodstyle.css';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';
import img from '../image/kk.gif';


function FoodChangePhoto(props) {

    const [foodPhoto, setFoodPhoto] = useState([]);

    const navi = useNavigate();

    const photourl1=process.env.REACT_APP_FOODSMALLURL;
    const photourl2=process.env.REACT_APP_FOODSMALLURL2;

    const {num} = useParams();

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

    //사진 수정 버튼 클릭시 호출 함수
    const updateButtonEvent=()=>{
        if(foodPhoto.length===0){
            alert('수정할 사진을 선택하세요');
            return;
        }
        const url="/react/updatephoto?num="+num;
        Axios.get(url)
        .then(res=>{
            alert("사진이 수정되었습니다.");
            //상세 페이지로 이동
            navi(`/food/detail/${num}`);
        })
    }

    return (
        <div className='foodcontainer'>
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
            <button type='button' className='btn btn-outline-secondary' style={{width:'100px', margin:'20px 20px'}} onClick={updateButtonEvent}>사진 수정</button>
        </div>
    );
}

export default FoodChangePhoto;