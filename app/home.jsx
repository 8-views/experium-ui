import React from 'react'
import SliderText from '@/components/SliderText'
import { experiumImageUrl } from '@/utils/common'
import ImageShowcase from '@/components/ImageShowcase'
import Video from '@/components/video'
import ImageText from '@/components/ImageText'
import ThumbsGallery from '@/components/ThumbsGallery'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'


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

const Home = () => {
  return (

    <>
      <Banner />
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
        title="Nature Walks"
        subtitle="Relax and Reconnect"
        description="Enjoy guided trails surrounded by nature’s calm. Suitable for all ages."
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
      <ImageText
        title="Banquet Halls"
        heading="Host Events with Unmatched Elegance"
        description="Three premium venues, each spanning <b>5,000 sqft</b>, ideal for events, parties, and celebrations."
        buttonLabel="Enquire now"
        images={[{ src: experiumImageUrl('banquet-halls.png'), alt: 'Explore Attractions' }]}

        backgroundColor="bg-cream"

      />
      <ImageText
        title="Convention Centers"

        description="<b>15,000 sqft</b> of space perfect for conferences and large gatherings."
        buttonLabel="Enquire now"
        images={[{ src: experiumImageUrl('convention-center.png'), alt: 'Explore Attractions' }]}
        textFirstOnDesktop={true}
        backgroundColor="bg-cream"

      />
      <ImageText
        title="Amphitheater"

        description="Experience vibrant cultural performances at <b>India’s largest amphitheater with
               1,500 seating capacity.</b>"
        buttonLabel="Enquire now"
        images={[{ src: experiumImageUrl('banquet-halls.png'), alt: 'Explore Attractions' }]}

        backgroundColor="bg-cream"

      />
      <ThumbsGallery />
      <FAQ />
      <Footer />

    </>
  )
}

export default Home