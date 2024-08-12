import { useDispatch, useSelector } from 'react-redux'
import starredSlice from '../../data/starredSlice'
import watchLaterSlice from '../../data/watchLaterSlice'
import placeholder from '../../assets/not-found-500X750.jpeg'
import {forwardRef} from "react";
import StarButton from '../../components/common/StarButton';
import WatchLaterButton from '../../components/common/WatchLaterButton';

const Movie = forwardRef(({ movie, viewTrailer }, ref) => {
    const state = useSelector((state) => state);
    const { starred, watchLater } = state;
    const { starMovie, unstarMovie } = starredSlice.actions;
    const { addToWatchLater, removeFromWatchLater } = watchLaterSlice.actions;

    const dispatch = useDispatch();

    const handleCloseCard = (e) => {
        if (!e) var e = window.event;
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();
        e.target.parentElement.parentElement.classList.remove('opened');
    };

    const isStarred = starred.starredMovies.map((m) => m.id).includes(movie.id);
    const isWatchLater = watchLater.watchLaterMovies.map((m) => m.id).includes(movie.id);

    return (
        <div className="wrapper" ref={ref}>
            <div className="card" onClick={(e) => e.currentTarget.classList.add('opened')}>
                <div className="card-body text-center">
                    <div className="overlay" />
                    <div className="info_panel">
                        <div className="overview">{movie.overview}</div>
                        <div className="year">{movie.release_date?.substring(0, 4)}</div>

                        <StarButton
                            isStarred={isStarred}
                            onClick={() =>
                                dispatch(
                                    isStarred
                                        ? unstarMovie(movie)
                                        : starMovie({
                                              id: movie.id,
                                              overview: movie.overview,
                                              release_date: movie.release_date?.substring(0, 4),
                                              poster_path: movie.poster_path,
                                              title: movie.title,
                                          })
                                )
                            }
                        />

                        <WatchLaterButton
                            isWatchLater={isWatchLater}
                            onClick={() =>
                                dispatch(
                                    isWatchLater
                                        ? removeFromWatchLater(movie)
                                        : addToWatchLater({
                                              id: movie.id,
                                              overview: movie.overview,
                                              release_date: movie.release_date?.substring(0, 4),
                                              poster_path: movie.poster_path,
                                              title: movie.title,
                                          })
                                )
                            }
                        />

                        <button type="button" className="btn btn-dark" onClick={() => viewTrailer(movie)}>
                            View Trailer
                        </button>
                    </div>
                    <img
                        className="center-block"
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : placeholder}
                        alt="Movie poster"
                    />
                </div>
                <h6 className="title mobile-card">{movie.title}</h6>
                <h6 className="title">{movie.title}</h6>
                <button type="button" className="close" onClick={handleCloseCard} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    );
});

export default Movie;