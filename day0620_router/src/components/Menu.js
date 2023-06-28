import React from 'react';
import "../App.css";
import { NavLink } from 'react-router-dom';

function Menu(props) {
    return (
        <div>
            <ul className='menu'>
            <li><NavLink to={"/"}>Main</NavLink></li>
                <li><NavLink to={"/home"}>Home</NavLink></li>
                
                <li><NavLink to={"/food"}>Food #1</NavLink></li>
                <li><NavLink to={"/food/1"}>Food #2</NavLink></li>
                <li><NavLink to={"/food/2/3"}>Food #3</NavLink></li>

                <li><NavLink to={"/about"}>About #1</NavLink></li>
                <li><NavLink to={"/about/AMD"}>About #2</NavLink></li>
                <li><NavLink to={"/about/비트캠프"}>About #3</NavLink></li>
            </ul>
        </div>
    );
}

export default Menu;