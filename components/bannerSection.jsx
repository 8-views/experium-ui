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
      className={`relative bg-cover bg-center text-white ${className}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black bg-opacity-60 w-full h-full p-8 md:p-16 flex flex-col items-center justify-center text-center">
        {logo && <img src={logo} alt="Logo" className="w-24 h-24 mb-6" />}
        <h1 className="text-4xl font-bold mb-2">{heading1}</h1>
        <h1 className="text-4xl font-bold mb-4">{heading2}</h1>
        <p className="text-lg mb-2 max-w-2xl">{paragraph1}</p>
        <p className="text-lg mb-6 max-w-2xl">{paragraph2}</p>
        {buttonText && (
          <button
            onClick={onButtonClick}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded"
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default BannerSection;
