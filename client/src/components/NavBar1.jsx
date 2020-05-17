import React from 'react';
 import {NavLink} from "react-router-dom"
const NavBar1 = () => {
    return (
        <div>
           <ul className="nav1">
                       <li>
                    <NavLink to="/contact" activeClassName="active" className="ai-element__label">
                        User Account Info
                        
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/orders" activeClassName="active" className="ai-element__label">
                       Books Orders

                    </NavLink>
                </li>
           </ul>
        </div>
    );
}
 
export default NavBar1;