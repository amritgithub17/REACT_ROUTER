import React from 'react'
import { NavLink } from 'react-router-dom'
function Header
() {
  return (
    <div>
        <a href="#">LOGO</a>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Services">Services</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                    
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default  Header
