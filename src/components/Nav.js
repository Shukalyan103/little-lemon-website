import React from 'react'
import logo from "../assets/images/Logo .svg"
import '../App.css';

function Nav() {
    return (
        <>
            <nav>
                <div className='logo'>
                    <img src={logo} alt='logo'></img>
                </div>
                <div className='menu-items'>
                    <ul>
                        <li><a href='/#'>home</a> </li>
                        <li><a href='/#'>about</a> </li>
                        <li><a href='/#'> menu</a></li>
                        <li><a href='/#'> Reservation</a></li>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Nav;