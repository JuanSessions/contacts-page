import React from 'react';
import { NavLink } from "react-router-dom";


function Navbar() {

    return (
        <nav>
            <ul className="section">
                <li>
                    <NavLink to="/" exact activeClassName="active" className="ai-element__label" >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" exact activeClassName="active" className="ai-element__label" >
                        Login
                    </NavLink>
                </li>

            </ul>
        </nav>

    )
}

export default Navbar
