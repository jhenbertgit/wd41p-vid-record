"use client";
import React from "react";
import VideosList from "../components/VideosList";
import "../styles/index.css";
import { videolist } from "../videolists";

const Page = () => {
  return (
    <>
      <section>
        <VideosList videos={videolist} />
      </section>
    </>
  );
};

export default Page;
