import React from 'react';
import './App.css';
import { ThemeContext } from './context/ThemeContext';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

// function Footer({isDark,setIsDark}) {

//     const toggleButton=()=>{
//         console.log("click:"+isDark);
//         setIsDark(!isDark);
//     }

//     return (
//         <div>
//             <footer className='footer' style={{backgroundColor:isDark?'black':'lightgray'}}>
//                 <button type='button' className='button' onClick={toggleButton}>Dark Mode</button>
//             </footer>
//         </div>
//     );
// }

function Footer() {

    const {isDark,setIsDark} = useContext(ThemeContext);
    const user = useContext(UserContext);

    const toggleButton=()=>{
        console.log("click:"+isDark);
        setIsDark(!isDark);
    }

    return (
        <div>
            <footer className='footer' style={{backgroundColor:isDark?'black':'lightgray'}}>
                <button type='button' className='button' onClick={toggleButton}>{user}</button>
            </footer>
        </div>
    );
}

export default Footer;