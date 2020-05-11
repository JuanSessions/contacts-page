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
                <li>
                    <NavLink to="/contact" activeClassName="active" className="ai-element__label">
                        User account
                        
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/books" activeClassName="active" className="ai-element__label">
                        Books List
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/orders" activeClassName="active" className="ai-element__label">
                       Books Orders

                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar
