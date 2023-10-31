"use client";
import dynamic from "next/dynamic";
import { Col, Container, Row } from "reactstrap";
import { motion, useScroll, useSpring } from "framer-motion";
import classes from "./global.module.css";

//import components
import CustomHeader from "@/components/CustomHeader";
const VideoLists = dynamic(() => import("@/components/VideoLists"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div className={classes["progress-bar"]} style={{ scaleX }} />
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
