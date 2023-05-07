import VideosList from "./components/VideosList";
import "./App.css";
import { videos } from "./videos";

function App() {
  return (
    <>
      <section>
        <VideosList videos={videos} />
      </section>
    </>
  );
}

export default App;
