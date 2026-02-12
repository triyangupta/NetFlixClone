import axios from "axios";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { now_playing_movie_api, options } from "../utils/constant";
import { useDispatch } from "react-redux";

const useNowPlayingMovie = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(now_playing_movie_api, options)
        dispatch(getNowPlayingMovies(res.data.results))

    } catch (error) {
        console.log(error);
    }
}
export default useNowPlayingMovie