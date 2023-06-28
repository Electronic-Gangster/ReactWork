import React, { useState, useEffect } from 'react';
import './foodstyle.css';
import { useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios';

function FoodDetail(props) {

    const [data,setData]=useState('');
    const [photo,setPhoto]=useState([]);
    //원본사진 url
    const photourl=process.env.REACT_APP_FOODURL;

    const {num}=useParams();
    console.log({num});
    console.log({num}.num);

    const navi=useNavigate();

    //num 에 해당하는 dto 을 얻어서 data 에 넣기
    const getData=()=>{
        const detailUrl="/react/detail?num="+num;
        Axios.get(detailUrl)
        .then(res=>{
            setData(res.data);
            //data중 fphoto는 ,로 분리해서 photo 에 넣기
            setPhoto(res.data.fphoto.split(","));
        })
    }


    useEffect(()=>{
        getData();
    },[]);


    //삭제 이벤트
    const deleteButtonEvent=()=>{
        const b=window.confirm("삭제하려면 확인 누르시요");
        if(!b){
            return;
        }
        const url='/react/delete?num='+num;
        Axios.delete(url)
        .then(res=>{
            navi("/food/list")
        })
    }

    return (
        <div className='foodcontainer'>
            <h1>예약 상세보기</h1>
            <div>
                <button type='button' className='btn btn-outline-danger'
                style={{width:'90px',marginRight:'10px'}}
                onClick={()=>navi("/food/form")}>예약 추가</button>

                <button type='button' className='btn btn-outline-warning'
                style={{width:'90px',marginRight:'10px'}}
                onClick={()=>navi("/food/list")}>예약 목록</button>

                <button type='button' className='btn btn-outline-success'
                style={{width:'90px',marginRight:'10px'}}
                onClick={()=>navi(`/food/updatephoto/${num}`)}
                >사진 수정</button>

                <button type='button' className='btn btn-outline-info'
                style={{width:'90px',marginRight:'10px'}}
                onClick={()=>navi(`/food/update/${num}`)}>내용 수정</button>

                <button type='button' className='btn btn-outline-secondary'
                style={{width:'90px',marginRight:'10px'}}
                onClick={deleteButtonEvent}>예약 삭제</button>
            </div>

            <h4 style={{marginTop:'30px',marginBottom:'20px'}}>예약자명 : {data.fname}</h4>
            <h5>예약자 사진 👇</h5>
            {
                photo.map((myphoto,idx)=><img alt='' src={`${photourl}${myphoto}`} className='myphoto'/>)
            }
            <h5>방문일: {data.orderday}</h5>
            <h5>휴대폰: {data.fhp}</h5>
            <h5>예약일: {data.bookingday}</h5>
            <h5>주문내용</h5>
            <pre style={{marginLeft:'10px', fontSize:'18px', color:'blue'}}>{data.fcontent}</pre>
        </div>
    );
}

export default FoodDetail;