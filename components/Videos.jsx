import classes from "./Video.module.css";

const Video = (props) => {
  const { topic, dateTime, link } = props;

  return (
    <li className={classes.video}>
      <h2>{topic}</h2>
      <h3>{dateTime}</h3>
      <a href={link} rel="noreferrer" target="_blank">
        Video Link
      </a>
    </li>
  );
};
export default Video;
