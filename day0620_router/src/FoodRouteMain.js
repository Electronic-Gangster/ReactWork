import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FoodList from './food/FoodList';
import FoodForm from './food/FoodForm';
import FoodDetail from './food/FoodDetail';
import img from './image/kk.gif';
import FoodChangePhoto from './food/FoodChangePhoto';
import FoodUpdateInfo from './food/FoodUpdateInfo';

function FoodRouteMain(props) {
    return (
        <Routes>
            <Route path="/" element={<FoodList/>}/>
            <Route path="/food/list" element={<FoodList/>}/>
            <Route path="/food/form" element={<FoodForm/>}/>
            <Route path="/food/detail/:num" element={<FoodDetail/>}/>
            <Route path="/food/updatephoto/:num" element={<FoodChangePhoto/>} />
            <Route path="/food/update/:num" element={<FoodUpdateInfo/>}/>

            {/* 위의 매핑 주소 외에는 무조건 에러페이지 표시 */}
            <Route path='*' element={
                <div>
                    <p>이것은 잘못 된 주소이다. 함께 폭4하자!</p>
                    <img alt='' src={img} width={200}/>
                </div>
            }/>
        </Routes>
    );
}

export default FoodRouteMain;
