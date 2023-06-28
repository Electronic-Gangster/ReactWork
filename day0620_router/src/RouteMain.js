import React from 'react';
import Menu from './components/Menu';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Food from './pages/Food';
import About from './pages/About';
import Main from './pages/Main';
import img from './image/4.gif';


function RouteMain(props) {
    return (
        <div>
            <Menu/>
            <hr style={{clear:'both'}}/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/home/*' element={<Home/>}/>

                {/* 방법 1 */}
                {/* <Route path='/about' element={<About/>}/>
                <Route path='/about/:emp' element={<About/>}/> */}

                {/* 방법2 */}
                <Route path='/about' element={<About/>}>
                    <Route path=':emp' element={<About/>}/>
                </Route>
                
                {/* <Route path='/food' element={<Food/>}/> */}
                <Route path='/food' element={<Food/>}>
                    <Route path=':food1' element={<Food/>}/>
                    <Route path=':food1/:food2' element={<Food/>}/>
                </Route>

                {/* url 직접 입력하며 테스트 하기 */}
                <Route path='/login/*' element={
                    <div>
                        <h2>login의 하위 메뉴들입니다.</h2>
                        <Home/> {/* 원하는 컴포넌트 넣기 */}
                        <Food/>
                    </div>
                }/>
                
                {/* 위의 매핑 주소 외에는 무조건 에러페이지 표시 */}
                <Route path='*' element={
                    <div>
                        <img alt='' src={img} width={200}/>
                    </div>
                }/>
            </Routes>
        </div>
    );
}

export default RouteMain;