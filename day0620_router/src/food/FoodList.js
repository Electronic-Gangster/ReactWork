import React, { useState, useEffect } from 'react';
import './foodstyle.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import FoodRowItem from './FoodRowItem';

function FoodList(props) {

    const [foodlist, setFoodlist] = useState([]);   //배열로 받기
    
    //서버로 부터 목록을 가져오는 함수
    const list=()=>{
        const listurl="/react/list";
        Axios.get(listurl)
        .then(res=>{
            setFoodlist(res.data);
        })
    }

    //처음 시작시 목록 가져오기
    useEffect(()=>{
        list();
    },[]);

    const navi = useNavigate();

    return (
        //kk.gif?type=f&w=80&h=80&ttype=gif
        <div className='foodcontainer'>
            <button type='button' className='btn btn-outline-success' onClick={()=>navi("/food/form")}>예약추가</button>
            <hr/>
            <h1>총 {foodlist.length}개의 예약이 있습니다.</h1>
            {
                foodlist.map((item,idx)=><FoodRowItem key={idx} item={item}/>)
            }
        </div>
    );
}

export default FoodList;