import axios from "axios";
import {getUpcomingMovie } from "../redux/movieSlice";
import { upcoming_movie_api, options } from "../utils/constant";
import { useDispatch } from "react-redux";

const useUpcomingMovie = async () => {
    const dispatch =useDispatch();
    try {
        const res = await axios.get(upcoming_movie_api, options)
        dispatch(getUpcomingMovie(res.data.results))

    } catch (error) {
        console.log(error);

    }

}
export default useUpcomingMovie;