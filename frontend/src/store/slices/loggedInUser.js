import { createSlice } from "@reduxjs/toolkit";

export const loggedInUser = createSlice({
    name: 'current-user',
    initialState: {user: undefined, token: undefined, accessToken: undefined, avatar: null},
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload.user
            state.accessToken = action.payload.accessToken
        },
        logoutUser: (state) => {
            state.user = null
            state.accessToken = null
        },

        userObject: (state, action) => {
            state.user = action.payload;
            console.log(state.user)
        },
        setAvatar: (state, action) => {
            state.friendList = action.payload;
        }
    },
})

export const {loginUser, logoutUser, userObject, setAvatar} = loggedInUser.actions
export default loggedInUser.reducer