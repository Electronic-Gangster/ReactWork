import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './foodstyle.css';

function FoodRowItem({item}) {
    const [photo,setPhoto]=useState('');
    const navi=useNavigate();

    const photourl1=process.env.REACT_APP_FOODSMALLURL;
    const photourl2=process.env.REACT_APP_FOODSMALLURL2;

    //사진중 첫번째 사진을 photo 에 넣기
    useEffect(()=>{
        setPhoto(item.fphoto.split(",")[0]);
    },[]);

    return (
        <div className='liststyle'>
            <NavLink to={`/food/detail/${item.num}`}>
                <img alt='' src={`${photourl1}${photo}${photourl2}`}/>
            </NavLink>
            <br/>
            <b>{item.fname}</b>
        </div>
    );
}

export default FoodRowItem;