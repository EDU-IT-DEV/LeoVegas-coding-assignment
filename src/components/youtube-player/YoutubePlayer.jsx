import ReactPlayer from 'react-player';
import './youtube-player.scss';

const YoutubePlayer = ({ videoKey, onClose }) => {
  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div className="modal" data-testid="youtube-modal" onClick={onClose}>
      <div className="close-button" onClick={handleClose} data-testid="close-button">
        &times;
      </div>
      <ReactPlayer
        className="video-player"
        url={`https://www.youtube.com/watch?v=${videoKey}`}
        controls
        playing
        data-testid="youtube-player"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default YoutubePlayer;
