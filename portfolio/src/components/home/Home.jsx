import React, { useState, useRef, useEffect } from 'react';

import {CompareDemo} from "../sparkle/CompareDemo";

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Function to toggle play/pause
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Add error handling
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
        alert("Could not play audio. Please make sure the audio file exists.");
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Add event listeners for when the song ends
  useEffect(() => {
    const audio = audioRef.current;
    
    const handleEnded = () => {
      setIsPlaying(false);
    };
    
    if (audio) {
      audio.addEventListener('ended', handleEnded);
      return () => {
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="flex flex-col items-center max-w-md w-full px-4">
        {/* Audio Element with multiple source formats */}
        <audio ref={audioRef} preload="none" loop>
          <source src="/just-do-it.mp3" type="audio/mp3" />
        </audio>
        
        {/* Title */}
        <h1 className="text-5xl mb-8 font-bold" style={{ fontFamily: "'Brush Script MT', cursive" }}>
          Ritesh
        </h1>
        
        {/* Microphone Icon - Now shows on/off state */}
        <div 
          className="text-4xl mb-4 cursor-pointer transform transition-transform hover:scale-110"
          onClick={toggleMusic}
        >
          {isPlaying ? (
            // Mic On icon when playing
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          ) : (
            // Mic Off icon when paused
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          )}
        </div>

        
        <CompareDemo />
        
        {/* Social Links */}
        <div className="flex space-x-8 mt-8">
          
          {/* Instagram Icon */}
          <a href="https://www.instagram.com/ritesh_iz_back?igsh=MTA0dzFmb2J2NnBtdA==" target="_blank" className="text-3xl hover:text-gray-300 transition-transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          
          {/* Heart Icon */}
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-3xl hover:text-gray-300 transition-transform hover:scale-110" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" />
            </svg>
          </a>

          {/* Facebook Icon */}
          <a href="https://www.facebook.com/riteshkumar.patel.3192" className="text-3xl hover:text-gray-300 transition-transform hover:scale-110" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;