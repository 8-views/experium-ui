'use client';
import React, { useEffect, useRef, useState } from 'react';

const FixedVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false); // renamed for clarity

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          videoRef.current?.play();
        } else {
          setIsVisible(false);
          videoRef.current?.pause();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="play relative h-screen w-full overflow-hidden"
    >
      <video
        ref={videoRef}
        className={`fixed top-0 left-0 w-full h-screen object-cover z-[-1] transition-opacity duration-700 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        muted
        preload="none"
        playsInline
        loop
      >
        <source
          src="https://11views.com/aparna-website-imgs/deccan.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default FixedVideo;
