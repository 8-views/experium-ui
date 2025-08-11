'use client';
import React from 'react';

const BannerSection = ({
  className = '',
  bgImage,
  logo,
  heading1,
  heading2,
  paragraph1,
  paragraph2,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section
      className={`relative bg-cover   bg-center text-white ${className}`}
      style={{ backgroundImage: `url(${bgImage})`,
       backgroundSize: 'cover',
        backgroundPosition: 'center', }}
    >
      <div className=" w-full h-full p-6 md:p-12 flex flex-col items-center justify-start text-center">
        {logo && <img src={logo} alt="Logo" className="  h-[80px] w-[220px] mb-1" />}
        <h1 className="heading !mb-1">{heading1}</h1>
        <h1 className="heading !mb-1">{heading2}</h1>
        <p className="para !mb-2">{paragraph1}</p>
        <p className="para  !mb-2">{paragraph2}</p>
        {buttonText && (
          <button
            onClick={onButtonClick}
            className="blue-btn"
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default BannerSection;
