const WatchLaterButton = ({ isWatchLater, onClick }) => (
    <button type="button" data-testid={isWatchLater ? "remove-watch-later" : "watch-later"} className={`btn btn-light btn-watch-later ${isWatchLater ? 'blue' : ''}`} onClick={onClick}>
        {isWatchLater ? <i className="bi bi-check" /> : 'Watch Later'}
    </button>
);

export default WatchLaterButton;
