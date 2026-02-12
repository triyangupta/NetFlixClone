import React, { useEffect } from "react";
import Header from './Header'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import SearchMovie from "./SearchMovie";
// import axios from "axios";
// import { now_playing_movie_api, options } from "../utils/constant";
// import { getNowPlayingMovies } from "../redux/movieSlice";

const Browse = () => {
    const user = useSelector(store => store.app.user);
    const toggle = useSelector(store => store.movie.toggle);
    const navigate = useNavigate();

    // custom hooks
    useNowPlayingMovie();
    usePopularMovie();
    useTopRatedMovie();
    useUpcomingMovie();



    useEffect(() => {
        if (!user) {
            navigate("/");
            return;
        }
    }, [user, navigate]);


    return (
        <div>
            <Header />
            <div>
                {
                    toggle ? <SearchMovie /> : (
                        <>
                            <MainContainer />
                            <MovieContainer />
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Browse
