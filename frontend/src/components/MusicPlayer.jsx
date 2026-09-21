import { useState } from "react";

function MusicPlayer({selectedMood }) {

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="music-player">

      <div className="player-info">

        <div className="album-art">
          🌙
        </div>

        <div>
          <p className="player-title">
            A quiet evening
          </p>

          <p className="player-mood">
            {selectedMood }
          </p>
        </div>

      </div>


      <div className="player-controls">

        <button className="control-button">
          ⏮
        </button>

        <button
          className="play-button"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>

        <button className="control-button">
          ⏭
        </button>

      </div>


      <div className="player-progress">

        <span>0:00</span>

        <input
          type="range"
          min="0"
          max="100"
          defaultValue="0"
        />

        <span>3:42</span>

      </div>

    </div>
  );
}

export default MusicPlayer;