import { useState } from "react";
import Navbar from "../components/Navbar";
import MusicPlayer from "../components/MusicPlayer";

const musicFiles = import.meta.glob(
  "../assets/music/*.mp3",
  {
    eager: true,
    query: "?url",
    import: "default"
  }
);


// Create playlist for each mood
const createPlaylist = (mood) => {
  const songs = [];
  for (let i = 1; i <= 8; i++) {
    const filePath =`../assets/music/${mood}${i}.mp3`;
    if (musicFiles[filePath]) {
      songs.push({
        title: `${mood} ${i}`,
        src: musicFiles[filePath]
      });
    }
  }
  return songs;
};


const musicLibrary = {
  rainyEvening: createPlaylist("rainyEvening"),
  midnight: createPlaylist("midnight"),
  chaitime: createPlaylist("chaitime"),
  peace: createPlaylist("peace"),
  focus: createPlaylist("focus"),
  nostalgia: createPlaylist("nostalgia")

};


function Listen() {

  const [selectedMood, setSelectedMood] =
    useState("rainyEvening");


  return (
    <div className="listen-page">
      <Navbar />
      <main className="listen-content">
        <p className="listen-label">
          LISTEN
        </p>
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
          <h2>
            Choose your mood
          </h2>
          <div className="mood-list">


            {/* Rainy Evening */}

            <button
              className="mood-card"
              onClick={() =>
                setSelectedMood("rainyEvening")
              }
            >
              🌧️

              <span>
                Rainy Evening
              </span>
            </button>


            {/* Midnight */}

            <button
              className="mood-card"
              onClick={() =>
                setSelectedMood("midnight")
              }
            >
              🌙

              <span>
                Midnight
              </span>
            </button>


            {/* Chai Time */}

            <button
              className="mood-card"
              onClick={() =>
                setSelectedMood("chaitime")
              }
            >
              ☕

              <span>
                Chai Time
              </span>
            </button>


            {/* Peace */}

            <button
              className="mood-card"
              onClick={() =>
                setSelectedMood("peace")
              }
            >
              🕊️

              <span>
                Peace
              </span>
            </button>


            {/* Focus */}

            <button
              className="mood-card"
              onClick={() =>
                setSelectedMood("focus")
              }
            >
              🌿

              <span>
                Focus
              </span>
            </button>


            {/* Nostalgia */}

            <button
              className="mood-card"
              onClick={() =>
                setSelectedMood("nostalgia")
              }
            >
              📷

              <span>
                Nostalgia
              </span>
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