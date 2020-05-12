import React from 'react';
 import {NavLink} from "react-router-dom"
const NavBar1 = () => {
    return (
        <div>
           <ul>
                       <li>
                    <NavLink to="/contact" activeClassName="active" className="ai-element__label">
                        User account
                        
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