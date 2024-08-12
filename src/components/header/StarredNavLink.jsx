import React from 'react';
import { NavLink } from "react-router-dom";
import useStarredMovies from '../../hooks/useStarredMovies';

const StarredNavLink = () => {
  const starredMovies = useStarredMovies();

  return (
    <NavLink to="/starred" data-testid="nav-starred" className="nav-starred">
      {starredMovies.length > 0 ? (
        <>
          <i className="bi bi-star-fill bi-star-fill-white" />
          <sup className="star-number">{starredMovies.length}</sup>
        </>
      ) : (
        <i className="bi bi-star" />
      )}
    </NavLink>
  );
};

export default StarredNavLink;
