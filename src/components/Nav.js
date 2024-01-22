import React, { useState } from 'react'
import logo from "../assets/images/Logo .svg"
import hamburger from "../assets/images/hamburger.svg"
import '../App.css';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <>
            <nav>
                <div className='logo'>
                    <img src={logo} alt='logo'></img>
                </div>
                <button onClick={toggleMenu}>
                    <img className='ham-menu' src={hamburger} alt='menu' />
                </button>
                <ul className={`menu-items ${menuOpen ? 'open' : ''}`}>
                    <li><a href='/#'>Home</a> </li>
                    <li><a href='/#'>About</a> </li>
                    <li><a href='/#'>Menu</a></li>
                    <li><a href='/#'>Reservation</a></li>
                    <li><a href='/#'>Order online</a></li>
                    <li><a href='/#'>Login</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;