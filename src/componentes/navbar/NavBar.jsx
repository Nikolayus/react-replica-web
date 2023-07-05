import React from 'react';
import './navbar.css';
import './prueva.css'
import logo from '../../images/logo.svg';

class NavBar extends React.Component {
    render() {
        return (
        <>
            <nav className="navbar">
                <img src={logo}/> 
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/">Description</a>
                </li>
                <li className="nav-item">
                    <a href="/features">Features</a>
                </li>
                <li className="nav-item">
                    <a href="/screens">Screens</a>
                </li>
                <li className="nav-item dropdown">
                    <a href="/extra" className="dropdown-toggle">Extra</a>
                    <div className="dropdown-menu">
                    <a href="/productos/articledetails">Article Details</a>
                    <a href="/productos/termsconditions">Terms Conditions</a>
                    <a href="/productos/privacypolicy">Privacy Policy</a>
                    </div>
                </li>
                <li className="nav-item downnav">
                    <a href="/download">Downdload</a>
                </li>
                </ul>
            </nav>
        </>
        );
    }
}

export default NavBar;