"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const VideoAnimation = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Framer Motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Enhanced border radius animation - semicircle to rounded rectangle
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [
      "50% 50% 25px 25px",  // Start: semicircle with rounded bottom
      "40% 40% 20px 20px",  // Transition: less curved
      "25% 25% 15px 15px",  // Almost rectangular
      "15px 15px 15px 15px" // End: rounded rectangle
    ]
  );

  // Scale animation
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1.05, 1]
  );

  // Rotation animation (subtle)
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 2, 0]
  );

  // Opacity animation
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.7, 1, 1, 0.9]
  );

  // Box shadow animation
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "0 10px 30px rgba(0,0,0,0.3)",
      "0 25px 50px rgba(0,0,0,0.4)",
      "0 15px 35px rgba(0,0,0,0.3)"
    ]
  );

  // Smooth spring animations
  const springConfig = { stiffness: 300, damping: 30, restDelta: 0.001 };
  const smoothScale = useSpring(scale, springConfig);
  const smoothRotate = useSpring(rotate, springConfig);

  // Enhanced intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPlaying(true);
          if (videoRef.current && isLoaded) {
            videoRef.current.play().catch(console.error);
          }
        } else {
          setIsPlaying(false);
          videoRef.current?.pause();
        }
      },
      { 
        threshold: 0.3,
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isLoaded]);

  // Video load handler
  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  // Play/pause controls
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(console.error);
        setIsPlaying(true);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[120vw] w-[120vw] max-w-[800px] max-h-[800px] mx-auto overflow-hidden flex items-center justify-center"
      style={{ perspective: '1000px' }}
    >
      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-full">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Video container with enhanced animations */}
      <motion.div
        style={{
          borderRadius: borderRadius,
          scale: smoothScale,
          rotate: smoothRotate,
          opacity: opacity,
          boxShadow: boxShadow,
        }}
        className="relative w-full h-full overflow-hidden cursor-pointer"
        onClick={togglePlayPause}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
        whileTap={{ 
          scale: 0.98,
          transition: { duration: 0.1 }
        }}
      >
        <motion.video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          preload="metadata"
          playsInline
          loop
          onLoadedData={handleVideoLoad}
          onError={() => console.error('Video failed to load')}
          initial={{ filter: 'brightness(0.8)' }}
          animate={{ 
            filter: isPlaying ? 'brightness(1)' : 'brightness(0.9)',
          }}
          transition={{ duration: 0.5 }}
        >
          <source
            src="https://11views.com/aparna-website-imgs/deccan.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </motion.video>

        {/* Play/Pause overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: !isPlaying && isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg 
              className="w-8 h-8 text-gray-800 ml-1" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* Progress indicator */}
        <motion.div
          className="absolute bottom-4 left-4 right-4 h-1 bg-white bg-opacity-30 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: isPlaying ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="h-full bg-white rounded-full"
            style={{ 
              scaleX: scrollYProgress,
              transformOrigin: 'left'
            }}
          />
        </motion.div>
      </motion.div>

      {/* Debug info (remove in production) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 left-4 text-white text-sm bg-black bg-opacity-50 p-2 rounded">
          <div>Scroll: {Math.round(scrollYProgress.get() * 100)}%</div>
          <div>Playing: {isPlaying ? 'Yes' : 'No'}</div>
          <div>Loaded: {isLoaded ? 'Yes' : 'No'}</div>
        </div>
      )}
    </div>
  );
};

export default VideoAnimation;