import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import watchLaterSlice from "../data/watchLaterSlice";
import MoviesGrid from "../components/common/MoviesGrid";
import "../pages/starred/starred.scss";

const WatchLater = ({ viewTrailer }) => {
  const state = useSelector((state) => state);
  const { watchLater } = state;
  const { removeAllWatchLater } = watchLaterSlice.actions;
  const dispatch = useDispatch();

  return (
    <div className="starred" data-testid="watch-later-div">
      {watchLater.watchLaterMovies.length > 0 ? (
        <>
          <h6 className="header">Watch Later List</h6>
          <MoviesGrid movies={watchLater.watchLaterMovies} viewTrailer={viewTrailer} />
          <footer className="text-center">
            <button className="btn btn-primary" onClick={() => dispatch(removeAllWatchLater())}>
              Empty list
            </button>
          </footer>
        </>
      ) : (
        <div className="text-center empty-cart">
          <i className="bi bi-heart" />
          <p>You have no movies saved to watch later.</p>
          <p>
            Go to <Link to="/">Home</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default WatchLater;
