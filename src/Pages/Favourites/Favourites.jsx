import React, {useEffect, useState} from 'react';
import Users from "../../Components/Users/Users";
import {useSelector} from "react-redux";

const Favourites = () => {

    const {favourites} = useSelector(state => state['favouritesReducer']);

    return (
        <div>
            <h1>Favourites</h1>
            <Users  users={favourites}/>
        </div>
    );
};

export default Favourites;
