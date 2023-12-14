import React, {useEffect, useState} from 'react';
import Users from "../../Components/Users/Users";

const Favourites = () => {

    const [users, setUsers] = useState([]);
    const [isDelete, setIsDelete] = useState({});



    useEffect(() => {
        setUsers(localStorage.getItem("FavouriteUsers") ? JSON.parse(localStorage.getItem("FavouriteUsers")) : [])
    }, [isDelete])


    return (
        <div>
            <h1>Favourites</h1>
            <Users setIsDelete={setIsDelete} users={users}/>
        </div>
    );
};

export default Favourites;
