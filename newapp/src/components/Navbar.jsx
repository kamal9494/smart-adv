import React from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
    const NavStyle = ({isActive}) => {
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            // backgroundColor: isActive ? 'red' : '',
        }
    }

    return (
        <div className="nav-bar">
            <label>Smart Advertising</label>
            <nav>
                <NavLink style={NavStyle} className="main-nav"  exact to="/">Camera</NavLink><br/>
                <NavLink style={NavStyle} className="main-nav"  exact to="/liveAds">Live Ads</NavLink><br/>
                <NavLink style={NavStyle} className="main-nav"  exact to="/contact">Developer</NavLink><br/>
            </nav>
        </div>
    );
}

export default Navbar;