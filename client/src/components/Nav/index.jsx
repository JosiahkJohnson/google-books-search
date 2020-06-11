import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Nav() {
    return(
        <nav className = "navbar navbar-expand-lg navbar-light bg-light">
            <a className = "navbar-brand" href="/">Book Reader</a>
            
            {/* Main navigation bar */}
                <ul className="navbar-nav">

                    {/* The home button */}
                    <li className="nav-item">
                        <Link to = "/home">Home</Link>
                    </li>

                    {/* The search page nav button */}
                    <li className = "nav-item">
                        <Link to = "/search">Search</Link>
                    </li>
                </ul>
        </nav>
    );
};

export default Nav;