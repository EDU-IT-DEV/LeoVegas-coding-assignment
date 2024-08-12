const StarButton = ({ isStarred, onClick }) => (
    <span className="btn-star" data-testid={isStarred ? "unstar-link" : "starred-link"} onClick={onClick}>
        <i className={isStarred ? "bi bi-star-fill" : "bi bi-star"} data-testid="star-icon" />
    </span>
);

export default StarButton;
