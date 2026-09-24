import { BrowserRouter, Routes, Route } from "react-router-dom";
import heroImage from "./assets/sukoon.png";

import Home from "./pages/Home";
import Listen from "./pages/Listen";
import Experiences from "./pages/Experiences";
import Stories from "./pages/Stories";
import StoryDetails from "./pages/StoryDetails";

function Landing() {
  return (
    <div className="landing-page">

      <div
        className="hero-background"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      <div className="mist"></div>

      <main className="welcome-content">

        <p className="welcome-label">WELCOME TO</p>

        <h1>Sukoon.</h1>

        <p className="welcome-text">
          A little corner of the internet
          <br />
          where you don't have to be anything.
        </p>

        <div className="landing-buttons">
          <a href="/home" className="enter-button">
            🎧 Enter Sukoon
          </a>

          <button className="share-button">
            ↗ Share Sukoon
          </button>
        </div>

      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/home" element={<Home />} />

        <Route path="/listen" element={<Listen />} />

        <Route path="/experiences" element={<Experiences />} />

        <Route path="/stories" element={<Stories />} />

        <Route path="/stories/:storyId" element={<StoryDetails />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;