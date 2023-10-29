"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  CardBody,
  CardSubtitle,
} from "reactstrap";

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
      <Card color="light" style={{ width: "18rem", height: "20rem" }}>
        <img
          src={thumbnailUrl}
          alt="Video Thumbnail"
          onClick={toggle}
          style={{ cursor: "pointer" }}
        />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {content}
          </CardSubtitle>
        </CardBody>
      </Card>
      <Modal isOpen={isModalOpen} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody className="align-self-center">
          <iframe
            width="720"
            height="350"
            src={videoUrl}
            title={title}
            style={{ border: "none" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </ModalBody>
      </Modal>
    </>
  );
};

export default CustomCard;
