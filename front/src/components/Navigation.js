import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css'
const Navigation =()=>{
    return(
        <div >
            <ul className='nav'>
                <NavLink to="/">
                    <li className="item">
                        Accueil
                    </li>
                </NavLink>
                <NavLink to="/Home">
                    <li className="item">
                        Home
                    </li>
                </NavLink>
                <NavLink to="/Login">
                    <li className="item">
                        Login
                    </li>
                </NavLink>
                <NavLink to="/NotFound">
                    <li className="item">
                        NotFound
                    </li>
                </NavLink>
                <NavLink to="/Register">
                    <li className="item">
                        Register
                    </li>
                </NavLink>
                
            </ul>
        </div>
    )
}
export default Navigation;