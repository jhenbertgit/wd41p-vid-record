import PropTypes from "prop-types";
import Video from "./Video";
import classes from "./VideosList.module.css";

const VideosList = ({ videos }) => {
  return (
    <ul className={classes["videos-list"]}>
      {videos.map((video) => (
        <Video
          key={video.id}
          topic={video.topic}
          dateTime={video.dateTime}
          link={video.link}
        />
      ))}
    </ul>
  );
};

VideosList.propTypes = {
  videos: PropTypes.array,
};

export default VideosList;
