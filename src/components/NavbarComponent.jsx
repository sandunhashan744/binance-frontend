import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import logo from './img/logo.png'

import './css/navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <Link href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="hero" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="demo" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Demo</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="downloadApp" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Download</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="cotactUS" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Contact</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar
