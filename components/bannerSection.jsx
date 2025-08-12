'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const BannerSection = ({
  className = '',
  bgImage,
  mobileBgImage,
  logo,
  heading1,
  heading2,
  paragraph1,
  paragraph2,
  buttonText,
  onButtonClick,
  headingClass,
}) => {
  const [currentBgImage, setCurrentBgImage] = useState(bgImage);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setCurrentBgImage(mobile && mobileBgImage ? mobileBgImage : bgImage);
    };

    handleResize(); // Set on load
    window.addEventListener('resize', handleResize); // Update on resize

    return () => window.removeEventListener('resize', handleResize);
  }, [bgImage, mobileBgImage]);

  return (
    <section className={`relative text-white ${className}`}>
      {/* Background Image using Next.js Image component */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <Image
          src={bgImage}
          alt="Background"
          fill
          className={`object-cover object-center transition-opacity duration-300 ${
            isMobile && mobileBgImage ? 'opacity-0' : 'opacity-100'
          }`}
          priority
          quality={90}
          sizes="100vw"
        />
        
        {/* Mobile Image (if provided) */}
        {mobileBgImage && (
          <Image
            src={mobileBgImage}
            alt="Mobile Background"
            fill
            className={`object-cover object-center transition-opacity duration-300 ${
              isMobile ? 'opacity-100' : 'opacity-0'
            }`}
            priority={isMobile}
            quality={90}
            sizes="100vw"
          />
        )}
        
        {/* Optional overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-black/20"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full p-6 md:p-12 flex flex-col items-center justify-start text-center">
        {logo && (
          <div className="relative h-[80px] w-[220px] mb-1">
            <Image
              src={logo}
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        )}
        <h1 className={`heading !mb-1 ${headingClass}`}>{heading1}</h1>
        <h1 className={`heading !mb-1 ${headingClass}`}>{heading2}</h1>
        <p className="para !mb-2">{paragraph1}</p>
        <p className="para !mb-2">{paragraph2}</p>
        {buttonText && (
          <button onClick={onButtonClick} className="blue-btn">
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default BannerSection;