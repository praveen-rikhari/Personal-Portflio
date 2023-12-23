import { useState } from 'react';
import { Link } from 'react-scroll';
import logoImg from '../assets/logo.png';
import './navbar.css';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const closeNavbar = () => {
        setShowNavbar(false);   
    };

    return (
        <>
            <nav className={`navbar ${showNavbar ? 'open' : ''}`}>
                <div className="logo">
                    <img src={logoImg} alt="" />
                </div>

                <div className="nav-elements">
                    <ul>
                        <li>
                            <Link to='home' smooth={true} duration={750} >Home</Link>
                        </li>
                        <li>
                            <Link to='about' smooth={true} duration={500} >About</Link>
                        </li>
                        <li>
                            <Link to='skills' smooth={true} duration={600} >Skills</Link>
                        </li>
                        <li>
                            <Link to='projects' smooth={true} duration={700} >Projects</Link>
                        </li>
                        <li>
                            <Link to='contact' smooth={true} duration={500} >Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <i className='bi bi-list'></i>
                </div>
            </nav>
            <nav className={`mobile-nav ${showNavbar ? 'open-menu' : 'closed-menu'}`}>
                <span onClick={handleShowNavbar}>
                    <i className="bi bi-x"></i>
                </span>
                <ul>
                    <li >
                        <Link  onClick={closeNavbar} to='home' smooth={true} duration={750} >Home</Link>
                    </li>
                    <li >
                        <Link  onClick={closeNavbar} to='about' smooth={true} duration={500} >About</Link>
                    </li>
                    <li >
                        <Link  onClick={closeNavbar} to='skills' smooth={true} duration={600} >Skills</Link>
                    </li>
                    <li >
                        <Link  onClick={closeNavbar} to='projects' smooth={true} duration={700} >Projects</Link>
                    </li>
                    <li >
                        <Link  onClick={closeNavbar} to='contact' smooth={true} duration={500} >Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
