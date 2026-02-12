import React from "react";
import { Banner_Img_Url } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/movieSlice";

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch()
  if (!posterPath) return null;

  const handleOpen = () => {
    dispatch(setOpen({ open: true, movieId }));
  };

  return (
    <div className="w-48 m-3 shrink-0 cursor-pointer overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105"
      onClick={handleOpen}
    >
      <img
        className="h-full w-full object-cover"
        src={`${Banner_Img_Url}/${posterPath}`}
        alt="movie-banner"
      />
    </div>
  );
};

export default MovieCard;
