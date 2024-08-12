import { useSelector } from 'react-redux';

const useStarredMovies = () => {
  return useSelector((state) => state.starred.starredMovies);
};

export default useStarredMovies;
