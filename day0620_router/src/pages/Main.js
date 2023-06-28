import React from 'react';
import "../App.css";
import { useNavigate } from 'react-router-dom';

function Main(props) {
    //리엑트에서 페이지 이동시 navigate() 함수 사용
    const navi = useNavigate();
    return (
        <div>
            <div>
                <button type='button' className='mybtn' onClick={()=>navi("/home")}>HOME 이동</button>
                <button type='button' className='mybtn' onClick={()=>navi("/food")}>FOOD 이동</button>
                <button type='button' className='mybtn' onClick={()=>navi("/food/1")}>FOOD1 이동</button>
                <button type='button' className='mybtn' onClick={()=>navi("/food/2/3")}>FOOD2 이동</button>
                <button type='button' className='mybtn' onClick={()=>navi("/about")}>ABOUT 이동</button>
                <button type='button' className='mybtn' onClick={()=>navi("/about/AMD")}>ABOUT2 이동</button>
                <button type='button' className='mybtn' onClick={()=>navi("/about/비트캠프")}>ABOUT3 이동</button>
            </div>
        </div>
    );
}

export default Main;