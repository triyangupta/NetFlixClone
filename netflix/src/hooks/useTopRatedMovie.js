import axios from 'axios';
import { useDispatch } from 'react-redux'
import { options, top_rated_movie_api } from '../utils/constant';
import {getTopRatedMovie } from '../redux/movieSlice';

const useTopRatedMovie = async () => {
    const dispatch = useDispatch();
     try {
        const res = await axios.get(top_rated_movie_api, options)
        dispatch(getTopRatedMovie(res.data.results))

    } catch (error) {
        console.log(error);

    }
  
}

export default useTopRatedMovie
