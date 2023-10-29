"use client";
import dynamic from "next/dynamic";
import { Col, Container, Row } from "reactstrap";

//import components
import CustomHeader from "@/components/CustomHeader";
const VideoLists = dynamic(() => import("@/components/VideoLists"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  return (
    <>
      <CustomHeader />
      <Container>
        <Row>
          <Col className="text-center p-3">
            <VideoLists />
          </Col>
        </Row>
      </Container>
    </>
  );
}
