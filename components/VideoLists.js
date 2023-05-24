import React from "react";
import CustomCard from "./UI/CustomCard";
import { List } from "reactstrap";
import { videos } from "@/data";

const VideoLists = () => {
  return (
    <List type="unstyled">
      {videos.map((video) => (
        <li key={video.dateTime}>
          <CustomCard
            title={video.topic}
            content={video.dateTime}
            href={video.link}
          />
        </li>
      ))}
    </List>
  );
};

export default VideoLists;
