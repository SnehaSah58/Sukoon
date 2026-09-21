import Navbar from "../components/Navbar";
import MusicPlayer from "../components/MusicPlayer";
import { useState } from "react";



const musicLibrary = {
  rainyEvening: [
    {
      title: "A Quiet Evening",
      src: ""
    },
    {
      title: "Rain on the Window",
      src: ""
    },
    {
      title: "After the Rain",
      src: ""
    }
  ],

  midnight: [
    {
      title: "Midnight Walk",
      src: ""
    },
    {
      title: "Moonlit Thoughts",
      src: ""
    }
  ],

  chaiTime: [
    {
      title: "Warm Cup",
      src: ""
    },
    {
      title: "Slow Evening",
      src: ""
    }
  ],

  peace: [
    {
      title: "Stillness",
      src: ""
    },
    {
      title: "Quiet Mind",
      src: ""
    }
  ],

  focus: [
    {
      title: "Deep Focus",
      src: ""
    },
    {
      title: "Flow",
      src: ""
    }
  ],

  nostalgia: [
    {
      title: "Old Memories",
      src: ""
    },
    {
      title: "Back Then",
      src: ""
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
        <MusicPlayer selectedMood={selectedMood} />
      </main>
    </div>
  );
}

export default Listen;