import React, {useState} from 'react';
import './App.css';
import Page from "./Page";
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

function Root(props) {

    const [isDark,setIsDark]=useState(false);

    return (
        // <div>
        //     {/* Page 는 실제 isDark 변수를 사용안함./}
        //     {/ 단지 서브 컴포넌트로 전달하기 위해 props로 보냄*/}
        //     <Page isDark={isDark} setIsDark={setIsDark}/>
        // </div>
        <UserContext.Provider value={'가카오'}>
            <ThemeContext.Provider value={{isDark,setIsDark}}>
                <Page/>
            </ThemeContext.Provider>
        </UserContext.Provider>
    );
}

export default Root;