import React from 'react';
import './App.css';
import { ThemeContext } from './context/ThemeContext';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

// function Content({isDark}) {
//     return (
//         <div className='content' style={{backgroundColor:isDark?'gray':'white'}}>
//             <p>비트캠프님! 즐거운 하루 되세요!</p>
//         </div>
//     );
// }

function Content() {

    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);

    return (
        <div className='content' style={{backgroundColor:isDark?'gray':'white'}}>
            <p>반갑습니다. {user}</p>
        </div>
    );
}

export default Content;