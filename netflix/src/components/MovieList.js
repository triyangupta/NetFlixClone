import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, searchMovie = false }) => {
  if (!movies?.length) return null; // ✅ prevent crash

  return (
    <div className="px-8">
      <h1 className={`${searchMovie ? "text-black flex flex-col" : "text-white"} p-4 text-3xl font-semibold`}>{title}</h1>

      <div className={`${searchMovie ? "grid grid-cols-7" : "flex gap-4 overflow-x-auto no-scrollbar"}`}>
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
            movieId={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
