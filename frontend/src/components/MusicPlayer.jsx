import { useEffect, useRef, useState } from "react";

function MusicPlayer({ selectedMood, playlist }) {

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [sleepTimer, setSleepTimer] = useState(null);
  const [sleepTimeLeft, setSleepTimeLeft] = useState(0);

  const audioRef = useRef(null);
  const currentSong = playlist[currentSongIndex];

  useEffect(() => {
    // Purana song stop karo
    if (audioRef.current) {
      audioRef.current.pause();
    }

    // New mood ki first song se start
    setCurrentSongIndex(0);
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);

  }, [selectedMood]);


  useEffect(() => {
    if (!audioRef.current) return;
    // New song load karo
    audioRef.current.load();
    setCurrentTime(0);
    setDuration(0);
  }, [currentSongIndex, selectedMood]);

  const startSleepTimer = (minutes) => {
  const seconds = minutes * 60;

    setSleepTimer(seconds);
    setSleepTimeLeft(seconds);
  };

  const cancelSleepTimer = () => {
    setSleepTimer(null);
    setSleepTimeLeft(0);
  };

  useEffect(() => {
  if (sleepTimeLeft <= 0) return;

  const timer = setInterval(() => {
    setSleepTimeLeft((previousTime) => {
      if (previousTime <= 1) {
        clearInterval(timer);

        if (audioRef.current) {
          audioRef.current.pause();
        }

        setIsPlaying(false);
        setSleepTimer(null);

        return 0;
      }

      return previousTime - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, [sleepTimeLeft]);

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

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(
      audioRef.current.currentTime
    );
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(
      audioRef.current.duration
    );
  };


  const handleSeek = (event) => {
    const newTime = Number(event.target.value);
    if (!audioRef.current) return;
    audioRef.current.currentTime =
      newTime;
    setCurrentTime(newTime);

  };


  const handleNext = async () => {
    const nextIndex =
      (currentSongIndex + 1) %
      playlist.length;

    setCurrentSongIndex(nextIndex);
    setCurrentTime(0);
    setDuration(0);

    // React ko new song render karne ka time
    setTimeout(async () => {
      if (!audioRef.current) return;
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log(
          "Next song play failed:",
          error
        );
      }
    }, 100);
  };

  const handlePrevious = async () => {

    const previousIndex =(currentSongIndex - 1 + playlist.length) % playlist.length;
    setCurrentSongIndex(previousIndex);
    setCurrentTime(0);
    setDuration(0);

    setTimeout(async () => {
      if (!audioRef.current) return;
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log(
          "Previous song play failed:",
          error
        );
      }
    }, 100);
  };

  const handleSongEnd = () => {
    handleNext();
  };

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
        key={`${selectedMood}-${currentSongIndex}`}
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleSongEnd}
      />

      <div className="player-info">

      <div className="album-art">

        {selectedMood === "rainyEvening" && "🌧️"}
        {selectedMood === "midnight" && "🌙"}
        {selectedMood === "chaiTime" && "☕"}
        {selectedMood === "peace" && "🕊️"}
        {selectedMood === "focus" && "🌿"}
        {selectedMood === "nostalgia" && "📷"}

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

      <div className="sleep-timer">
      <span className="sleep-timer-label">🌙 Sleep Timer</span>

      <div className="sleep-timer-options">

        <button
          type="button"
          className={sleepTimer === null ? "active" : ""}
          onClick={cancelSleepTimer} >
          Off
        </button>

        <button
          type="button"
          className={sleepTimer === 15 * 60 ? "active" : ""}
          onClick={() => startSleepTimer(15)} >
          15 min
        </button>

        <button
          type="button"
          className={sleepTimer === 30 * 60 ? "active" : ""}
          onClick={() => startSleepTimer(30)}  >
          30 min
        </button>

        <button
          type="button"
          className={sleepTimer === 45 * 60 ? "active" : ""}
          onClick={() => startSleepTimer(45)} >
          45 min
        </button>

        <button
          type="button"
          className={sleepTimer === 60 * 60 ? "active" : ""}
          onClick={() => startSleepTimer(60)} >
          60 min
        </button>
      </div>

      {sleepTimeLeft > 0 && (
        <p className="sleep-timer-countdown">
          Music stops in{" "}
          {Math.floor(sleepTimeLeft / 60)}:
          {(sleepTimeLeft % 60)
            .toString()
            .padStart(2, "0")}
        </p>
      )}
    </div>

    </div>
  );
}

export default MusicPlayer;