'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);
  
  return matches;
};

const VideoAnimation2 = () => {
  const videoContainer = useRef(null);
  const isSmallScreen = useMediaQuery('(max-width: 640px)');
  
  const { scrollYProgress } = useScroll({
    target: videoContainer,
    offset: ['start end', 'end start'], 
  });
  

  const width = useTransform(scrollYProgress, [0, 1], ['50%', '200%']);
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 1],
    ['800px 800px 0px 0px', '0px 0px 0px 0px']
  );
  
  return (
  <div className="bg-red-500 ">
      <motion.div
        ref={videoContainer}
        className="rounded-t-[50%]  overflow-hidden flex justify-center h-[150vh]  !bg-transparent bg-cover bg-center bg-no-repeat"
        style={{
          width,
          ...(isSmallScreen && { borderRadius }),
        }}
      >
        {/* Fixed video container - no transforms applied */}
        <div className="  w-full h-full">
          {/* <video
            className="w-1/2 h-full object-cover bg-transparent"
            muted
            preload="none"
            playsInline
            loop
            autoPlay
          
          >
            <source
              src="https://11views.com/experium-assets/Experim.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
        </div>
      </motion.div>
      </div>

  );
};

export default VideoAnimation2;