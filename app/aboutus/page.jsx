'use client';
import React from 'react';
import BannerSection from '@/components/bannerSection';
import { experiumImageUrl } from '@/utils/common';
import Image from 'next/image';
import FixedVideo from '@/components/FixedVideo';
import VideoAnimation2 from '@/components/VideoAnimation2';

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <BannerSection
        className="h-[85vh] sm:h-[100vh] pt-10 sm:pt-20 mt-20"
        bgImage={experiumImageUrl('aboutus-banner.png')}
        heading1="About Us"
        paragraph1="Experium is a 150-acre destination in Hyderabad, offering nature, ."
        paragraph2="adventure, and world-class experiences for all ages."
        mobileBgImage={experiumImageUrl('home-banner2-mbl.png')}

      />
       
      

      {/* Philosophy Section */}
      <div className="container mx-auto px-4 py-8 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="heading">Our philosophy is simple</h2>
          <p className="para">
            <b>To create spaces where nature, luxury, and adventure coexist in harmony,</b> allowing our guests to
            relax, explore, and rejuvenate. Whether you're seeking a serene getaway or an action-packed
            adventure, <strong>Experium offers something for everyone.</strong>
          </p>
        </div>
      </div>

      {/* History & Vision Section */}
      <div
        className="relative bg-cover bg-center sm:bg-left-top bg-no-repeat"
        style={{ backgroundImage: `url(${experiumImageUrl('history-and-vision-bg.png')})` }}
      >
        <div className="container  mx-auto px-4 sm:px-16 py-8 md:py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center min-h-[500px] lg:min-h-[550px]">

            {/* Empty Left Side */}
            <div className="order-1 lg:order-1">
              {/* Left side intentionally empty for background image */}
            </div>

            {/* Text Section - Right Side */}
            <div className="order-2 lg:order-2 space-y-6  p-6 md:p-8 rounded-lg">
              <h2 className="heading !text-left !mb-6 !text-darkbrown">History & Vision</h2>

              <div className="space-y-4">
                <p className="para">
                  <strong>Experium was conceived with a vision to create a unique eco-tourism destination</strong> that caters to nature lovers, thrill-seekers, and those in search of luxury. With an emphasis on sustainability and preserving the natural beauty of the environment, <strong>Experium has grown into one of the largest and most diverse eco-parks in India, spanning 150 acres.</strong>
                </p>

                <p className="para">
                  Our vision is to continue expanding and evolving, offering new experiences, eco-friendly accommodations, and diverse attractions. Experium is more than just a destination; <strong>it's a place where you can escape the everyday and immerse yourself in the wonders of nature.</strong>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* Founder Section */}
      <div className="container    max-w-7xl mx-auto px-4 py-8 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Image Section */}
          <div className="order-1 lg:order-1">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[500px]">
              <Image
                src={experiumImageUrl('ramdev-rao.png')}
                alt="Ramdev Rao Ramadugu - The Visionary Behind Experium"
                fill
                className="object-cover "
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="order-2 lg:order-2 space-y-6">
            <h2 className="heading !text-left !mb-2">Ramdev Rao Ramadugu</h2>
            <p className="para mb-4">
              <b>The Visionary Behind Experium</b>
            </p>

            <div className="space-y-4">
              <p className="para">
                <strong>The 150-acre verdant creation was born from the unwavering vision of Ramdev Rao,</strong> whose deep-rooted love for nature shaped every inch of it.
              </p>

              <p className="para">
                His 25-year journey of passion and patience, has blossomed into a vibrant botanical wonder with <strong>over 10 lakh trees and 25,000+ exotic plant species from 85 countries.</strong>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Green Kingdom Group Section */}
      <div className="px-4 py-8 md:py-14 lg:py-16">
        <div className="bg-[#321B08] container mx-auto  max-w-7xl   rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

            {/* Text Section - Left Side */}
            <div className="order-2 lg:order-1 space-y-6 py-8 px-4 md:pl-20 lg:py-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8" style={{ color: '#FFECBD' }}>
                Green Kingdom Group
              </h2>

              <div className="space-y-4">
                <p className="text-sm sm:text-lg leading-relaxed text-white">
                  Green Kingdom Group is a renowned name in the hospitality and leisure industry, known for its commitment to excellence, innovation, and sustainability. With a rich history of developing world-class projects, Green Kingdom Group has expanded its portfolio to include Experium, a one-of-a-kind eco-tourism venture that reflects its dedication to quality and nature-focused development.
                </p>

                <p className="text-sm sm:text-lg leading-relaxed text-white">
                  The Group is dedicated to offering unique and enriching experiences that enhance lives while respecting the environment. Through Experium and other ventures, Green Kingdom Group continues to set new standards for eco-friendly, luxurious leisure spaces in India.
                </p>
              </div>
            </div>

            {/* Image Section - Right Side */}
            <div className="order-1 lg:order-2">
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                <Image
                  src={experiumImageUrl('green-kingdom.png')}
                  alt="Green Kingdom Group - Sculpture representing excellence and innovation"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;