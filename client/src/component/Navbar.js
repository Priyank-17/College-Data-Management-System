import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link,NavLink } from "react-router-dom";
import Top from './Top'
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar,setNavabr] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const changeBackgroung= () =>{
    if(window.scrollY>= 490){
      setNavabr(true)
    }
    else{
      setNavabr(false)
    }
  }
  window.addEventListener("scroll", changeBackgroung);
  return (
    <>
    <Top/>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="navbar-container">
          <Link to="/" className={navbar ? 'navbar-logo active' : 'navbar-logo'} onClick={closeMobileMenu}>
            CDMS
            <i class="fas fa-graduation-cap" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
                <NavLink exact activeClassName="active_class" to={"/"} className={navbar ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
                  Home
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink exact activeClassName="active_class" to='/private' className={navbar ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
                    Materials
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink exact activeClassName="active_class" to={'/Projects'} className={navbar ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
                    Projects
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink exact activeClassName="active_class" to='/Achivements' className={navbar ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
                    Achievements
                </NavLink>
            </li>
            <li className='nav-item'>
                <a activeClassName="active_class" href={'https://swagblogger.com/'} target="_blank" className={navbar ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
                    Blogs
                </a>
            </li>
            
            <li className='nav-item'>
                <NavLink exact activeClassName="active_class" to='/about_us' className={navbar ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
                    About us
                </NavLink>
            </li>      
            
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
