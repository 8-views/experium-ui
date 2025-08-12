'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import SliderText from '@/components/SliderText'
import { experiumImageUrl } from '@/utils/common'
import ImageShowcase from '@/components/ImageShowcase'
import Video from '@/components/video'
import ImageText from '@/components/ImageText'
import ThumbsGallery from '@/components/ThumbsGallery'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import FixedVideo from '@/components/FixedVideo'
import VideoAnimation from '@/components/VideoAnimation'
import BannerSection from '@/components/bannerSection'
import Elements from '@/components/elements';


import ViralVideos from '@/components/ViralVideos';
const FantasyZoneImages = [
  {
    id: 1,
    src: experiumImageUrl('fantasy-land-1.png'),
    alt: "Adventure Zone - Rope Course"
  },
  {
    id: 2,
    src: experiumImageUrl('fantasy-land-2.png'),
    alt: "Adventure Zone - Rope Course"
  },
  {
    id: 3,
    src: experiumImageUrl('fantasy-land-3.png'),
    alt: "Adventure Zone - Rope Course"
  },
  {
    id: 4,
    src: experiumImageUrl('fantasy-land-4.png'),
    alt: "Adventure Zone - Rope Course"
  },

]
const AdventureZoneImages = [
  {
    id: 1,
    src: experiumImageUrl('adventure-zone-1.png'),
    alt: "Adventure Zone - Rope Course"
  },
  {
    id: 2,
    src: experiumImageUrl('adventure-zone-2.png'),
    alt: "Adventure Zone - Rope Course"
  },
  {
    id: 3,
    src: experiumImageUrl('adventure-zone-3.png'),
    alt: "Adventure Zone - Rope Course"
  },
  {
    id: 4,
    src: experiumImageUrl('adventure-zone-4.png'),
    alt: "Adventure Zone - Rope Course"
  },


]
const GameZoneImages = [
  {
    id: 1,
    src: experiumImageUrl('game-zone-1.png'),
    alt: "Adventure Zone - Rope Course"
  },
  {
    id: 2,
    src: experiumImageUrl('game-zone-2.png'),
    alt: "Adventure Zone - Rope Course"
  },
  {
    id: 3,
    src: experiumImageUrl('game-zone-3.png'),
    alt: "Adventure Zone - Rope Course"
  },
  {
    id: 4,
    src: experiumImageUrl('game-zone-4.png'),
    alt: "Adventure Zone - Rope Course"
  },


]
const SculptureImages = [
  {
    id: 1,
    src: experiumImageUrl('sculpture-1.png'),
    alt: "Adventure Zone - Rope Course"
  },
  {
    id: 2,
    src: experiumImageUrl('sculpture-2.png'),
    alt: "Adventure Zone - Rope Course"
  },
  {
    id: 3,
    src: experiumImageUrl('sculpture-3.png'),
    alt: "Adventure Zone - Rope Course"
  },
  {
    id: 4,
    src: experiumImageUrl('sculpture-4.png'),
    alt: "Adventure Zone - Rope Course"
  },


]
const DiningZone = [
  {
    id: 1,
    src: experiumImageUrl('dining1.png'),
    alt: "food court"
  },


]

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let locomotiveScroll = null;

    const initScroll = async () => {
      // Wait for DOM to be ready
      if (document.readyState !== 'complete') {
        await new Promise(resolve => {
          if (document.readyState === 'complete') {
            resolve();
          } else {
            window.addEventListener('load', resolve, { once: true });
          }
        });
      }

      // Additional delay to ensure all content is rendered
      await new Promise(resolve => setTimeout(resolve, 300));

      // Check if container exists and has content
      if (!scrollRef.current || scrollRef.current.offsetHeight === 0) {
        console.warn('Scroll container not ready');
        return;
      }

      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;

        locomotiveScroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          lerp: 0.1, // Linear interpolation intensity
          multiplier: 1,
        });

        console.log('Locomotive Scroll initialized');
      } catch (error) {
        console.error('Locomotive Scroll error:', error);
      }
    };

    initScroll();

    // Cleanup
    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);
  return (

    <>
      <BannerSection

        className="h-[85vh] sm:h-[100vh] mt-20"
        bgImage={experiumImageUrl('home-banner.png')}
        logo={experiumImageUrl('logo.svg')}
        mobileBgImage={experiumImageUrl('home-banner-mbl.png')}
        heading1="Welcome to Our World"
        // heading2="Innovation Starts Here"
        paragraph1="A world-class destination, crafted for India."
      // paragraph2="Join us and experience the future of technology."
      // buttonText="Learn More"
      // onButtonClick={() => console.log('Banner button clicked')}
      />
      {/* <div className="fixed top-10 z-[-1] w-full h-full">
        <video
          className="w-1/2 h-full object-cover"
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
        </video>
      </div> */}

      <div className='bg-cream'>
        <div className="container mx-auto px-4 py-6 md:py-12 lg:py-14">
          <div className="max-w-6xl mx-auto text-center space-y-6">

            <p className="para">
              Immerse yourself in a world where nature, adventure, and luxury come together. Experium offers 150 acres of <b>lush landscapes, rare plant species, 600+ selfie spots, and thrilling activities. Discover the perfect blend of serene beauty and exciting adventures today!</b>
            </p>
            <Link href="/aboutus" className="clear-btn">

              EXPLOER THE PARK

            </Link>




          </div>
        </div>
      </div>

      <SliderText
        title="Fantasy Land"
        subtitle="Step Into a Living Dream"
        description="Wander through a world where every garden tells a story — vibrant, serene, and completely magical. From Zen-inspired spaces to flower-filled wonders, Fantasy Land is a visual and sensory escape like no other."
        images={FantasyZoneImages}
        heading="Explore Our Diverse Attractions"
        backgroundColor="bg-white"
      />
      <SliderText
        title="Adventure Zone"
        subtitle="For the Brave, the Bold, and the Just-Here-for-Fun"
        description="Ready to pump up the adrenaline? The Adventure Zone is where thrill meets 
          nature — packed with gravity-defying ropes, zippy fun, and unforgettable 
          challenges for all ages."
        images={AdventureZoneImages}
        textFirstOnDesktop={true}
        backgroundColor="bg-cream"
      />




      <SliderText
        title="Game Zone"
        subtitle="Power Up. Play Hard. Laugh Loud."
        description="Step into Experium’s high-energy Game Zone, packed with interactive, competitive, and skill-based games for all ages. Whether you’re into precision, reflexes, or just pure fun — there’s something here for everyone."
        images={GameZoneImages}

        backgroundColor="bg-white"
      />
      <SliderText
        title="Sculptures & Art Installations"

        description="Admire rare sculptures, adding an artistic touch to the park’s natural beauty."
        images={SculptureImages}
        backgroundColor="bg-cream"
        textFirstOnDesktop={true}
      />

      <FixedVideo />

      <ImageShowcase
        heading="The Vision Behind Experium Park"
        imageSrc={experiumImageUrl("vision-image.png")}
        imageAlt="Rock formations with red flowers at Experium Park"
        paragraphs={[
          "Discover our philosophy of blending nature with cutting-edge leisure experiences.",
          "<b>Experium, a proud initiative of Green Kingdom Group</b>, offers a unique fusion of art, nature, and adventure. Our mission is to redefine eco-tourism by providing an experience that celebrates the beauty of nature while offering modern, luxurious amenities.",
        ]}
        backgroundColor="bg-cream"
      />
      <Video />
      <Elements />

      <VideoAnimation />
      <SliderText

        title="Dining Options"
        // subtitle="Step Into a Living Dream"
        description="Savor over 15 cuisines at our current restaurants, with more dining options coming soon."
        images={DiningZone}
        heading="EXPLORE MORE"
        backgroundColor="bg-white"
      />
      <ImageText
        title="Banquet Halls"
        heading="Host Events with Unmatched Elegance"
        description="Three premium venues, each spanning <b>5,000 sqft</b>, ideal for events, parties, and celebrations."
        buttonLabel="ENQUIRE NOW"
        images={[{ src: experiumImageUrl('banquet-halls.png'), alt: 'Explore Attractions' }]}

        backgroundColor="bg-cream"

      />
      <ImageText
        title="Convention Centers"

        description="<b>15,000 sqft</b> of space perfect for conferences and large gatherings."
        buttonLabel="ENQUIRE NOW"
        images={[{ src: experiumImageUrl('convention-center.png'), alt: 'Explore Attractions' }]}
        textFirstOnDesktop={true}
        backgroundColor="bg-cream"

      />
      <ImageText
        title="Amphitheater"
        description="Experience vibrant cultural performances at <b>India’s largest amphitheater with
              1,500 seating capacity.</b>"
        buttonLabel="ENQUIRE NOW"
        images={[{ src: experiumImageUrl('banquet-halls.png'), alt: 'Explore Attractions' }]}
        backgroundColor="bg-cream"
      />
      <ViralVideos />

      <ThumbsGallery />
      <BannerSection
        className="h-[85vh] sm:h-[90vh] mt-0 !text-white"
        bgImage={experiumImageUrl('home-banner2.png')}
        mobileBgImage={experiumImageUrl('home-banner2-mbl.png')}
        heading1="Immerse Yourself in Luxury and "
        heading2="Nature at Experium Club."
        headingClass="!text-white"
        buttonText="EXPLORE THE CLUB"
        onButtonClick={() => console.log('Banner button clicked')}
      />
      <FAQ />


    </>
  )
}

export default Home