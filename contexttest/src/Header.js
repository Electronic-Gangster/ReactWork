import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import './App.css';
import { UserContext } from './context/UserContext';

// function Header({isDark}) {
//     return (
//         <div>
//             <header className='header' style={{backgroundColor:isDark?'black':'lightgray'}}>
//                 <h1>반갑습니다.</h1>
//             </header>
//         </div>
//     );
// }

function Header() {

    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);

    return (
        <div>
            <header className='header' style={{backgroundColor:isDark?'black':'lightgray'}}>
                <h1>Welcome to the Jungle {user}</h1>
            </header>
        </div>
    );
}

export default Header;