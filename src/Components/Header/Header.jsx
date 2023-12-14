import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import "./header.style.css"
import {ThemeContext} from "../../App";
import {useLogout} from "../../hooks/useLogout";

const Header = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);

    const {logout} = useLogout();

    return (
        <header>
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/favourites"}>Favourites</NavLink>
            <button onClick={logout}>Sign Out</button>
            <button onClick={toggleTheme}>{theme}</button>
        </header>
    );
};

export default Header;
