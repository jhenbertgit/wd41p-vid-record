"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  CardBody,
  Container,
  CardText,
  Col,
} from "reactstrap";
import { motion } from "framer-motion";

const CustomCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [apiKey, setApiKey] = useState("");

  const { title, content, videoUrl } = props;

  const toggle = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    const videoId = extractVideoId(videoUrl);

    //directly fetch the API key from API route
    fetch("/api/getApiKey")
      .then((response) => response.json())
      .then((data) => {
        setApiKey(data.apiKey);

        fetch(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${data.apiKey}&part=snippet`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.items.length > 0) {
              setThumbnailUrl(data.items[0].snippet.thumbnails.medium.url);
            }
          });
      });
  }, [videoUrl]);

  //helper function to extract video Id
  function extractVideoId(url) {
    const videoIdMatch = url.match(
      /(?:youtube\.com\/watch\?v=|youtu.be\/|youtube.com\/embed\/|youtube.com\/v\/|youtube.com\/e\/|watch\?v=|youtu.be\/|youtube.com\/embed\/|youtube.com\/v\/|youtube.com\/e\/)([^?&"'>]+)/
    );
    if (videoIdMatch) {
      return videoIdMatch[1];
    }
    return null;
  }

  return (
    <>
      <Card color="light" style={{ height: "100%", width: "100%" }}>
        <motion.img
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ rotate: 5 }}
          src={thumbnailUrl}
          alt="Video Thumbnail"
          onClick={toggle}
          style={{ cursor: "pointer" }}
        />
        <CardBody className="d-flex flex-column flex-wrap">
          <CardTitle className="flex-shrink-1" tag="h5">
            {title}
          </CardTitle>
          <CardText className="mb-2 text-muted flex-shrink-1">
            {content}
          </CardText>
        </CardBody>
      </Card>
      <Modal isOpen={isModalOpen} toggle={toggle} fullscreen="md">
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody className="align-self-center">
          <Container>
            <Col className="embed-responsive embed-responsive-4by3">
              <iframe
                width="auto"
                height="auto"
                src={videoUrl}
                title={title}
                style={{ border: "none" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="embed-responsive-item"
              ></iframe>
            </Col>
          </Container>
        </ModalBody>
      </Modal>
    </>
  );
};

export default CustomCard;
