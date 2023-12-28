import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../Services/user.service";

export const getAllUsers = createAsyncThunk(
    "usersSlice/getAllUsers",
    async () => {
        return await userService.getUsers();
    }
);

const usersSlice = createSlice({
    name: "usersSlice",
    initialState: {
        users: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.pending, (state) => {
            state.status = "Loading...";
            state.error = null;
        })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                console.log(state);
                state.status = "Loading finished!";
            })
            .addCase(getAllUsers.rejected, (state) => {
                state.status = "rejected";
                state.error = "Failed to fetch users";
            });
    },
});

const usersReducer = usersSlice.reducer;
export {usersReducer};
