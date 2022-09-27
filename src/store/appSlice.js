import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isFilmFound : false,
    film: [],
    search: ""
};

export const appSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
        setFilmFound: (state, action) => {
            state.isFilmFound = action.payload
        },
        setFilm: (state, action) => {
            state.film = action.payload
        },
        setSearch: (state, action) => {
            state.search = action.payload
        }
    }
});

export const { setFilmFound, setFilm, setSearch } = appSlice.actions;

export default appSlice.reducer;