"use client";
import CustomCard from "./UI/CustomCard";
import { ListGroup, ListGroupItem } from "reactstrap";
import { videos } from "@/data";

const VideoLists = () => {
  return (
    <ListGroup className="d-flex flex-row flex-wrap" flush>
      {videos.map((video) => (
        <ListGroupItem
          key={video.dateTime}
          className="col-lg-3 col-md-4 col-sm-6 mb-4"
        >
          <CustomCard
            title={video.topic}
            content={video.dateTime}
            videoUrl={video.link}
          />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default VideoLists;
