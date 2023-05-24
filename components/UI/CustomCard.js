import React from "react";
import { Card, CardTitle, CardText, CardLink } from "reactstrap";

const CustomCard = (props) => {
  const { title, content, href } = props;
  return (
    <Card body className="my-3 p-3">
      <CardTitle tag="h5">{title}</CardTitle>
      <CardText>{content}</CardText>
      <CardLink href={href} target="_blank" rel="noreferrer">
        Video Link
      </CardLink>
    </Card>
  );
};

export default CustomCard;
