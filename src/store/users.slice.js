import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../Services/user.service";

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async () => {
        try {
            return await userService.getUsers();
        } catch (e) {
            console.log(e)
        }
    }
)

const usersSlice = createSlice({
    name: "usersSlice",
    initialState: {
        users: ["qweqwe"],
        status: null,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.pending, (state) => {
            state.status = 'Loading...';
            state.error = null;
        }).addCase(getAllUsers.fulfilled, (state, action) => {
            state.status = 'Loading finished!';
            state.users = action.payload;
            console.log(state.users);
        }).addCase(getAllUsers.rejected, (state) => {
            state.status = 'rejected';
            state.error = 'error';
        })
    }
})

const userReducer = usersSlice.reducer;
export {userReducer};
