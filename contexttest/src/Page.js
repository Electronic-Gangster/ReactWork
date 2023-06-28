import React, { useContext } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';
import { ThemeContext } from './context/ThemeContext';

// function Page({isDark,setIsDark}) {

//     console.log(isDark);

//     return (
//         <div className='page'>
//             <Header isDark={isDark}/>
//             <Content isDark={isDark}/>
//             <Footer isDark={isDark} setIsDark={setIsDark}/>
//         </div>
//     );
// }

function Page() {

    const data = useContext(ThemeContext);
    console.dir(data);

    return (
        <div className='page'>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default Page;