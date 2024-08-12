import React from "react";
import Movie from "../../pages/movies/Movie";
import "../../pages/movies/movies.scss";

const MoviesGrid = ({ movies, viewTrailer, measureRef }) => {
  return (
    <div className="movies-grid" data-testid="movies-grid">
      {movies?.map((movie, index) => (
        <Movie
          movie={movie}
          key={movie.id}
          viewTrailer={viewTrailer}
          ref={measureRef && movies.length === index + 1 ? measureRef : undefined}
        />
      ))}
    </div>
  );
};

export default MoviesGrid;
