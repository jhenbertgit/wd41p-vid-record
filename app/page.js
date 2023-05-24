"use client";

import CustomHeader from "@/components/CustomHeader";
import VideoLists from "@/components/VideoLists";

import { Col, Container, Row } from "reactstrap";

export default function Home() {
  return (
    <>
      <CustomHeader />
      <Container>
        <Row>
          <h1 className="text-center">Bootcamp Videos</h1>
          <Col md className="d-flex flex-column align-items-center p-3">
            <VideoLists />
          </Col>
        </Row>
      </Container>
    </>
  );
}
