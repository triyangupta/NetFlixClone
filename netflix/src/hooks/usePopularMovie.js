import axios from 'axios';
import { useDispatch } from 'react-redux'
import { options, popular_movie_api } from '../utils/constant';
import { getPopularMovie } from '../redux/movieSlice';

const usePopularMovie = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(popular_movie_api, options)
        dispatch(getPopularMovie(res.data.results))

    } catch (error) {
        console.log(error);
    }
}

export default usePopularMovie
