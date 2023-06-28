import React from 'react';
import { NavLink, Routes } from 'react-router-dom';
import HomeSub1 from './HomeSub1';
import HomeSub2 from './HomeSub2';
import HomeSub3 from './HomeSub3';
import { Route } from 'react-router-dom';

function Home(props) {
    return (
        <div>
            <h3 className='alert alert-info'>Home Page 입니다.</h3>
            
            <br/>
            
            <NavLink to="/home/sub1">Sub1</NavLink> &nbsp;&nbsp;
            <NavLink to="/home/sub2">Sub2</NavLink> &nbsp;&nbsp;
            <NavLink to="/home/sub3">Sub3</NavLink>
        
            <br/>

            {/* 중첩 라우터 설정 : 홈 안에 서브 1,2,3 설정 */}
            <Routes>
                <Route path='sub1' element={<HomeSub1/>}/>
                <Route path='sub2' element={<HomeSub2/>}/>
                <Route path='sub3' element={<HomeSub3/>}/>
            </Routes>
        </div>
    );
}

export default Home;