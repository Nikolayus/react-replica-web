//import React from 'react'
import './navbar.css';
import './prueva.css';
import logo from '../../images/logo.svg';

function NavBar2() {
    return (
        <>
            <nav>
                <img src={logo}/> 
                <ul>
                    <li><a href="#description">DESCRIPTION</a></li>
                    <li><a href="">FEATURES</a></li>
                    <li><a href="#screens">SCREENS</a></li>
                    <li className="ocult"><a href="">EXTRA</a>
                        <ul className="dropdown">
                            <li><a href="./extra1.html">ARTICLE DETAILS</a></li>
                            <li><a href="./extra2.html">TERMS CONDITIONS</a></li>
                            <li><a href="./extra3.html">PRIVACY POLICY</a></li>
                        </ul>
                    </li>
                    <li className="prueba"><a className="downnav" href="">DOWNLOAD</a></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar2;