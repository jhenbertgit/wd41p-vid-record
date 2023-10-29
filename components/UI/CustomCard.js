import React from "react";
import { Card, CardTitle, CardText, CardLink } from "reactstrap";

const CustomCard = (props) => {
  const { title, content, videoUrl } = props;
  return (
    <Card body className="my-3 p-3">
      <CardTitle tag="h5">{title}</CardTitle>
      <CardText>{content}</CardText>
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Card>
  );
};

export default CustomCard;
