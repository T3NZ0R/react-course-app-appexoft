import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";

const User = ({user, setIsDelete}) => {
    const {name, username, email, id} = user;

    const {pathname} = useLocation()

    const [disable, setDisable] = useState(false)

    const handleAddToFavourites = () => {
        let favouriteUsers = localStorage.getItem("FavouriteUsers") ? JSON.parse(localStorage.getItem("FavouriteUsers")) : [];
        localStorage.setItem("FavouriteUsers", JSON.stringify([...favouriteUsers, user]));
        setDisable(!disable);
    }

    const handleDeleteFromFavourites = () => {
        let favouriteUsers = localStorage.getItem("FavouriteUsers") ? JSON.parse(localStorage.getItem("FavouriteUsers")) : [];

        favouriteUsers = favouriteUsers.filter(item => item.id !== id);
        setIsDelete(user)

        localStorage.setItem("FavouriteUsers", JSON.stringify([...favouriteUsers]));
    }

    return (
        <div>
            {id}--{name}--{username}--{email}
            <button onClick={pathname.includes("home") ? handleAddToFavourites : handleDeleteFromFavourites}
                    style={{marginLeft: "20px"}}
                    disabled={disable}>{pathname.includes("home") ? "Add to" : "Delete from"} favourites
            </button>
            <Link to={`user/${id}`}>Follow</Link>
        </div>
    );
};

export default User;
