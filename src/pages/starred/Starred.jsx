import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import starredSlice from "../../data/starredSlice";
import MoviesGrid from "../../components/common/MoviesGrid";
import "./starred.scss";

const Starred = ({ viewTrailer }) => {
  const state = useSelector((state) => state);
  const { starred } = state;
  const { clearAllStarred } = starredSlice.actions;
  const dispatch = useDispatch();

  return (
    <div className="starred" data-testid="starred">
      {starred.starredMovies.length > 0 ? (
        <>
          <h6 className="header">Starred movies</h6>
          <MoviesGrid movies={starred.starredMovies} viewTrailer={viewTrailer} />
          <footer className="text-center">
            <button className="btn btn-primary" onClick={() => dispatch(clearAllStarred())}>
              Remove all starred
            </button>
          </footer>
        </>
      ) : (
        <div className="text-center empty-cart">
          <i className="bi bi-star" />
          <p>There are no starred movies.</p>
          <p>
            Go to <Link to="/">Home</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Starred;
