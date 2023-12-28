import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToFavourites, removeFromFavourites} from "../../store/favourites.slice";

const User = ({user}) => {
    const {name, username, email, id} = user;

    const {pathname} = useLocation()

    const [disable, setDisable] = useState(false);

    const dispatch = useDispatch()

    const handleAddToFavourites = () => {
        dispatch(addToFavourites(user))
        setDisable(!disable);
    }

    const handleDeleteFromFavourites = () => {
        dispatch(removeFromFavourites(user.id))
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
