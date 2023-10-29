import React from "react";
import CustomCard from "./UI/CustomCard";
import { List, ListItem } from "reactstrap";
import { videos } from "@/data";

const VideoLists = () => {
  return (
    <List type="unstyled">
      {videos.map((video) => (
        <ListItem key={video.dateTime}>
          <CustomCard
            title={video.topic}
            content={video.dateTime}
            videoUrl={video.link}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default VideoLists;
