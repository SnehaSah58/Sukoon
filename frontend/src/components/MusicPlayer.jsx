import { useEffect, useRef, useState } from "react";

function MusicPlayer({ selectedMood, playlist }) {

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);
  const currentSong = playlist[currentSongIndex];

  // Mood change hone par first song par reset
  useEffect(() => {

    setCurrentSongIndex(0);
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);

  }, [selectedMood]);


  // Jab current song change ho
  useEffect(() => {

    if (!audioRef.current) return;

    audioRef.current.load();

    setCurrentTime(0);
    setDuration(0);

  }, [currentSongIndex]);


  // Play / Pause
  const handlePlayPause = async () => {

    if (!audioRef.current) return;

    if (isPlaying) {

      audioRef.current.pause();
      setIsPlaying(false);

    } else {

      try {

        await audioRef.current.play();
        setIsPlaying(true);

      } catch (error) {

        console.log("Audio play failed:", error);

      }

    }
  };


  // Song ka current time
  const handleTimeUpdate = () => {

    if (!audioRef.current) return;

    setCurrentTime(audioRef.current.currentTime);

  };


  // Audio ki duration load hone ke baad
  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);

  };


  // Progress bar
  const handleSeek = (event) => {
    const newTime = Number(event.target.value);
    if (!audioRef.current) return;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);

  };


  // Next song
  const handleNext = async () => {

    const nextIndex =
      (currentSongIndex + 1) % playlist.length;

    setCurrentSongIndex(nextIndex);
    setCurrentTime(0);
    setDuration(0);

    setTimeout(async () => {

      if (!audioRef.current) return;

      try {

        await audioRef.current.play();
        setIsPlaying(true);

      } catch (error) {

        console.log("Next song play failed:", error);

      }

    }, 100);

  };


  // Previous song
  const handlePrevious = async () => {

    const previousIndex =
      (currentSongIndex - 1 + playlist.length) % playlist.length;

    setCurrentSongIndex(previousIndex);
    setCurrentTime(0);
    setDuration(0);

    setTimeout(async () => {

      if (!audioRef.current) return;

      try {

        await audioRef.current.play();
        setIsPlaying(true);

      } catch (error) {
        console.log("Previous song play failed:", error);
      }
    }, 100);
  };


  // Song khatam → automatically next
  const handleSongEnd = () => {
    handleNext();

  };


  // Time ko 0:00 format mein convert karna
  const formatTime = (time) => {
    if (!time || isNaN(time)) {
      return "0:00";
    }

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="music-player">

      <audio
        key={currentSong.src}
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleSongEnd}
      />


      {/* Song information */}

      <div className="player-info">

        <div className="album-art">
          🌙
        </div>

        <div>

          <p className="player-title">
            {currentSong.title}
          </p>

          <p className="player-mood">
            {selectedMood}
          </p>

        </div>

      </div>


      {/* Controls */}

      <div className="player-controls">

        <button
          className="control-button"
          onClick={handlePrevious}
        >
          ⏮
        </button>


        <button
          className="play-button"
          onClick={handlePlayPause}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>


        <button
          className="control-button"
          onClick={handleNext}
        >
          ⏭
        </button>

      </div>


      {/* Progress */}

      <div className="player-progress">

        <span>
          {formatTime(currentTime)}
        </span>

        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
        />

        <span>
          {formatTime(duration)}
        </span>

      </div>

    </div>
  );
}

export default MusicPlayer;