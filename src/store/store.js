import {configureStore} from "@reduxjs/toolkit";
import {favouritesReducer} from "./favourites.slice";
import {usersReducer} from "./users.slice";

const store = configureStore({
    reducer:{
        favouritesReducer,
        usersReducer
    }
})

export {store};
