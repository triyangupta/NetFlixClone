import axios from 'axios';
import React, { useState } from 'react'
import { options } from '../utils/constant';
import { Search_Movie_Url } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMovieDetails } from '../redux/searchSlice';
import { setLoading } from '../redux/userSlice';
import MovieList from './MovieList';

const SearchMovie = () => {
    const [searchMovie, setSearchMovie] = useState("");
    const dispatch = useDispatch();
    const isLoading = useSelector(store => store.app.isLoading)
    const { movieName, searchedMovie } = useSelector(store => store.searchMovie)

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!searchMovie.trim()) return;
        dispatch(setLoading(true))
        try {
            const res = await axios.get(`${Search_Movie_Url}${encodeURIComponent(searchMovie)}&include_adult=false&language=en-US&page=1`, options);
            const movies = res?.data?.results
            dispatch(setSearchMovieDetails({ searchMovie, movies }))
        } catch (error) {
            console.log(error);

        } finally {
            dispatch(setLoading(false))
        }
        setSearchMovie("");
    }

    return (
        <>
            <div className='flex justify-center pt-[10%] w-[100%] '>
                <form onSubmit={submitHandler} className='w-[50%]'>
                    <div className='flex justify-between shadow-md rounded-lg p-2 border-2 border-gray-200'>
                        <input value={searchMovie} onChange={(e) => setSearchMovie(e.target.value)}
                            className="w-full outline-none rounded-md text-lg " placeholder='Search Movie...' type='text' />
                        <button className='bg-red-700 hover:bg-red-800 text-white font-medium rounded-md px-4 py-2'>{isLoading ? "Loading..." : "Search"}</button>
                    </div>
                </form>
            </div>
            {
                searchedMovie && searchedMovie.length > 0 ? (
                    <MovieList title={movieName} movies={searchedMovie} searchMovie={true} />
                ) : (
                    <p className="text-center text-black font-bold text-3xl mt-6">Movie Not Found!</p>
                )
            }


        </>

    )
}

export default SearchMovie
