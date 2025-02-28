import React, { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  //   console.log(audioRef);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusicTrack, setCurrentMusicTrack] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);

  const tracks = [
    {
      title: "Track 1",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Track 2",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      image: "https://via.placeholder.com/150",
    },
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setTrackProgress(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        );
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  function handlePlayPause() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  }

  return (
    <div>
      <h1>Music Player</h1>
      <h2>{tracks[currentMusicTrack].title}</h2>
      <img src={tracks[currentMusicTrack].image} alt="audio-image" />
      <audio ref={audioRef} src={tracks[currentMusicTrack].source} />

      <div
        style={{
          marginInline: "auto",
          backgroundColor: "lightgray",
          maxWidth: "300px",
          marginBlock: "12px",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${trackProgress}%`,
            backgroundColor: isPlaying ? "cyan" : "red",
            height: "10px",
          }}
        >
          &nbsp;
        </div>
      </div>

      <div>
        <button
          onClick={() => {
            setCurrentMusicTrack((currentMusicTrack + 1) % tracks.length);
            setTrackProgress(0);
            setIsPlaying(false);
          }}
        >
          Prev
        </button>
        <button onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          onClick={() => {
            setCurrentMusicTrack(
              (currentMusicTrack - 1 + tracks.length) % tracks.length
            );
            setTrackProgress(0);
            setIsPlaying(false);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
