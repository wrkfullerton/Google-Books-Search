import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand lg navbar-light">
                <a className="navbar-brand brand-title" to="/">
                    Google Books Search
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-target="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul>
                        <li className="nav-item">
                            <NavLink className="nav-link heading-title" to="/search">Search</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link heading-title" to="/saved">Saved</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar
