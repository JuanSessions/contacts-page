import React from 'react';
import { NavLink } from "react-router-dom";


function Navbar() {

    return (
        <nav>
            <ul className="section">
                <li>
                    <NavLink to="/" exact activeClassName="active" className="ai-element__label" >
                        <button> Home</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" exact activeClassName="active" className="ai-element__label" >
                        <button>Login</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/register" exact activeClassName="active" className="ai-element__label" >
                        <button>Register</button>
                    </NavLink>
                </li>

            </ul>
        </nav>

    )
}

export default Navbar
