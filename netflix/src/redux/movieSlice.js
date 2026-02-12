import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        popularMovie: null,
        topRatedMovie: null,
        upcomingMovie: null,
        toggle: false,
        trailerMovie: null,
        open: false,
        selectedMovieId: null,
    },
    reducers: {
        getNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        getPopularMovie: (state, action) => {
            state.popularMovie = action.payload;
        },
        getTopRatedMovie: (state, action) => {
            state.topRatedMovie = action.payload;
        },
        getUpcomingMovie: (state, action) => {
            state.upcomingMovie = action.payload;
        },
        setToggle: (state) => {
            state.toggle = !state.toggle;
        },
        getTrailerMovie: (state, action) => {
            state.trailerMovie = action.payload;
        },
        setOpen: (state, action) => {
      state.open = action.payload.open;
      state.selectedMovieId = action.payload.movieId;
    },
    }
});
export const { getNowPlayingMovies, getPopularMovie, getTopRatedMovie, getUpcomingMovie, setToggle, getTrailerMovie, setOpen } = movieSlice.actions;
export default movieSlice.reducer;