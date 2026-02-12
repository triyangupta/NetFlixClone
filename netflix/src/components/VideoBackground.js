import useMovieById from "../hooks/useMovieById";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId, isModal }) => {
    const trailerMovie = useSelector((store) => store.movie.trailerMovie);

    useMovieById(movieId);

    if (!trailerMovie?.key) return null;

    return (
        <iframe
            className={isModal ? "w-full h-full" : "w-screen aspect-video"}
            src={`https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1`}
            title="YouTube player"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
        />
    );
};

export default VideoBackground;

// src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=qscP6VvxddB5rs0m&autoplay=1&mute=1`} //----Trailer MOvie
// src={`${video_background}&autoplay=1&mute=1`}  // ----youTube Video