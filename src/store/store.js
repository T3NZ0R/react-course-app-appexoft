import {configureStore} from "@reduxjs/toolkit";
import {favouritesReducer} from "./favourites.slice";
import {userReducer} from "./users.slice";

const store = configureStore({
    reducer:{
        favouritesReducer,
        userReducer
    }
})

export {store};
