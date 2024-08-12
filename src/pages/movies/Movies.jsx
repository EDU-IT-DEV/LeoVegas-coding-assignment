import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from '../../data/moviesSlice';
import { ENDPOINT_DISCOVER, ENDPOINT_SEARCH } from '../../constants';
import MoviesGrid from '../../components/common/MoviesGrid';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const Movies = ({ viewTrailer }) => {
  const { measureRef, isIntersecting } = useInfiniteScroll();
  const dispatch = useDispatch();

  const moviesSlice = useSelector((state) => state.movies);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');

  const load = useCallback(
    (page = 1) => {
      dispatch(
        fetchMovies({
          apiUrl: searchQuery ? ENDPOINT_SEARCH : ENDPOINT_DISCOVER,
          params: { page, query: searchQuery },
        })
      );
    },
    [dispatch, searchQuery]
  );

  useEffect(() => {
    if (moviesSlice?.page === 0) {
      load();
    }
  }, [load, moviesSlice.page]);

  useEffect(() => {
    if (isIntersecting && moviesSlice.hasMore) {
      load(moviesSlice.page + 1);
    }
  }, [isIntersecting, load, moviesSlice.hasMore]);

  useEffect(() => {
    load();
    window.scrollTo(0, 0);
  }, [searchQuery, load]);

  return (
    <MoviesGrid
      movies={moviesSlice.movies}
      viewTrailer={viewTrailer}
      measureRef={measureRef}
    />
  );
};

export default Movies;
