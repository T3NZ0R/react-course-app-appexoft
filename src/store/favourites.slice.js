import {createSlice} from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
    name: "favouritesSlice",
    initialState: {
        favourites: []
    },

    reducers: {
        addToFavourites: (state, action) => {
            state.favourites.push(action.payload);
        },
        removeFromFavourites: (state, action) => {
            state.favourites = state.favourites.filter(item => item.id !== action.payload);
        }
    }

})

const favouritesReducer = favouritesSlice.reducer;
export const {addToFavourites, removeFromFavourites} = favouritesSlice.actions;
export {favouritesReducer};
