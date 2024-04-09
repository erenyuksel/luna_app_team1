import { createSlice } from "@reduxjs/toolkit";

export const listFilter = createSlice({
    name: "listFilter",
    initialState: {filter : 'All', filterSearch : ""},
    reducers: {
        setListFilter: (state, action) => {
            state.filter = action.payload;
        },
        setSearchText: (state, action) => {
            state.filterSearch = action.payload
        },
    },
});
export const { setListFilter, setSearchText } = listFilter.actions;
export default listFilter.reducer;