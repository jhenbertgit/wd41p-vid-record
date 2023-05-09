import Video from "./Videos";
import classes from "./VideosList.module.css";

const VideosList = ({ videos }) => {
  return (
    <ul className={classes["videos-list"]}>
      {videos.map((video) => (
        <Video
          key={video.dateTime}
          topic={video.topic}
          dateTime={video.dateTime}
          link={video.link}
        />
      ))}
    </ul>
  );
};

export default VideosList;
