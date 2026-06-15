import useMovieById from "../hooks/useMovieById";
import { useSelector } from "react-redux";
import { video_background } from "../utils/constant";

const VideoBackground = ({ movieId, isModal }) => {
    const trailerMovie = useSelector(
        (store) => store.movie.trailerMovie
    );

    useMovieById(movieId);

    const iframeClass = isModal
        ? "w-full h-full"
        : "w-screen aspect-video";

    const videoSrc = trailerMovie?.key
        ? `https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1`
        : `${video_background}&autoplay=1&mute=1`;

    return (
        <iframe
            className={iframeClass}
            src={videoSrc}
            title="Video Player"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
        />
    );
};

export default VideoBackground;