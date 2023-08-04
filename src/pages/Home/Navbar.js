import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";


const Navbar = () => {
    return (
        <nav>
            <u1 className="nav-left">
                <li>Home</li>
                <li><Link to="/about">About</Link></li>
                <li>Roadmap</li>
                <li>Blog</li>
            </u1>

        
        <div className="nav-middle">Some · Stage</div>
        <div className="nav-right">
            <button>Head Backstage!</button>
                </div>
        </nav>
    );
};

export default Navbar; 

