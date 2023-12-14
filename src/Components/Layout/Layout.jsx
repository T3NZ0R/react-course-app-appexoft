import React from 'react';
import Header from "../Header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Favourites from "../../Pages/Favourites/Favourites";
import Login from "../../Pages/Login/Login";
import User from "../../Pages/User/User";
import Posts from "../../Pages/Posts/Posts";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}


            <Routes>
                <Route path={"/"} index element={<Home/>}/>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/home/user/:id"} element={<User/>}/>
                <Route path={"/home/user/:id/posts"} element={<Posts/>}/>
                <Route path={"/favourites"} element={<Favourites/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"*"} element={<h1>No Info</h1>}/>
            </Routes>
        </>
    );
};

export default Layout;
