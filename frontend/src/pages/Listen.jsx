import Navbar from "../components/Navbar";
import MusicPlayer from "../components/MusicPlayer";
import { useState } from "react";

import rainySong from "../assets/music/rainyEvening1.mp3";
import zaraZaraSong from "../assets/music/rainyEvening2.mp3";

const musicLibrary = {
  rainyEvening: [
    {
      title: "Rainy Evening",
      src: rainySong
    },
    {
      title: "Zara Zara",
      src: zaraZaraSong
    }
  ],

  midnight: [
    {
      title: "Rainy Evening",
      src: rainySong
    },
    {
      title: "Zara Zara",
      src: zaraZaraSong
    }
  ],

  chaiTime: [
    {
      title: "Rainy Evening",
      src: rainySong
    },
    {
      title: "Zara Zara",
      src: zaraZaraSong
    }
  ],

  peace: [
    {
      title: "Rainy Evening",
      src: rainySong
    },
    {
      title: "Zara Zara",
      src: zaraZaraSong
    }
  ],

  focus: [
    {
      title: "Rainy Evening",
      src: rainySong
    },
    {
      title: "Zara Zara",
      src: zaraZaraSong
    }
  ],

  nostalgia: [
    {
      title: "Rainy Evening",
      src: rainySong
    },
    {
      title: "Zara Zara",
      src: zaraZaraSong
    }
  ]
};

function Listen() {
  const [selectedMood, setSelectedMood] = useState("rainyEvening");

  return (
    <div className="listen-page">

      <Navbar />

      <main className="listen-content">
        <p className="listen-label">LISTEN</p>

        <h1>
          Find a little
          <br />
          peace here.
        </h1>

        <p className="listen-description">
          Music for the moments when you need
          <br />
          a little space from everything.
        </p>

        <section className="mood-section">
          <h2>Choose your mood</h2>
          <div className="mood-list">

            <button
              className="mood-card"
              onClick={() => setSelectedMood("rainyEvening")}
            >
              🌧️
              <span>Rainy Evening</span>
            </button>

            <button
              className="mood-card"
              onClick={() => setSelectedMood("midnight")}
            >
              🌙
              <span>Midnight</span>
            </button>

            <button
              className="mood-card"
              onClick={() => setSelectedMood("chaiTime")}
            >
              ☕
              <span>Chai Time</span>
            </button>

            <button
              className="mood-card"
              onClick={() => setSelectedMood("peace")}
            >
              🕊️
              <span>Peace</span>
            </button>

            <button
              className="mood-card"
              onClick={() => setSelectedMood("focus")}
            >
              🌿
              <span>Focus</span>
            </button>

            <button
              className="mood-card"
              onClick={() => setSelectedMood("nostalgia")}
            >
              📷
              <span>Nostalgia</span>
            </button>
          </div>
        </section>
        <MusicPlayer
        selectedMood={selectedMood}
        playlist={musicLibrary[selectedMood]}
        />
      </main>
    </div>
  );
}

export default Listen;