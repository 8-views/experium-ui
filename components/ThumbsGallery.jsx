'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function ThumbsGallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const images = [
        { id: 1, src: 'https://swiperjs.com/demos/images/nature-1.jpg', alt: 'Nature 1' },
        { id: 2, src: 'https://swiperjs.com/demos/images/nature-2.jpg', alt: 'Nature 2' },
        { id: 3, src: 'https://swiperjs.com/demos/images/nature-3.jpg', alt: 'Nature 3' },
        { id: 4, src: 'https://swiperjs.com/demos/images/nature-4.jpg', alt: 'Nature 4' },
        { id: 5, src: 'https://swiperjs.com/demos/images/nature-5.jpg', alt: 'Nature 5' },
        { id: 6, src: 'https://swiperjs.com/demos/images/nature-6.jpg', alt: 'Nature 6' },
        { id: 7, src: 'https://swiperjs.com/demos/images/nature-7.jpg', alt: 'Nature 7' },
        { id: 8, src: 'https://swiperjs.com/demos/images/nature-8.jpg', alt: 'Nature 8' },
        { id: 9, src: 'https://swiperjs.com/demos/images/nature-9.jpg', alt: 'Nature 9' },
        { id: 10, src: 'https://swiperjs.com/demos/images/nature-10.jpg', alt: 'Nature 10' },
    ];

    return (
        <div className="bg-cream">
            <div className="container mx-auto px-4 py-8 md:py-14 lg:py-16">
                <div className="w-full space-y-8 max-w-7xl mx-auto">

                    <h2 className="heading sm:pb-4 pb-0 text-center">Spectacular Public Events at Experium</h2>

                    <div className='overflow-visible relative sm:px-16'>
                        {/* Previous Button */}
                        <button
                            ref={prevRef}
                            className="absolute border  !bg-transparent left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full   hidden sm:flex items-center justify-center transition-all duration-200 z-10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-left-icon lucide-move-left"><path d="M6 8L2 12L6 16" /><path d="M2 12H22" /></svg>
                        </button>

                        {/* Next Button */}
                        <button
                            ref={nextRef}
                            className="absolute border !bg-transparent  right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg hidden sm:flex items-center justify-center transition-all duration-200 z-10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                        </button>

                        {/* Main Image Slider */}
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            loop={true}
                            spaceBetween={10}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            {images.map((image) => (
                                <SwiperSlide key={image.id}>
                                    <div className="relative w-full h-[500px]">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover rounded-lg"
                                            sizes="100vw"
                                            priority={image.id === 1}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Thumbnail Slider */}
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4} // default fallback
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper mt-4"
                            breakpoints={{
                                0: {
                                    slidesPerView: 4,
                                },
                                640: {
                                    slidesPerView: 4,
                                },
                                1024: {
                                    slidesPerView: 8,
                                },
                            }}
                        >
                            {images.map((image) => (
                                <SwiperSlide key={image.id}>
                                    <div className="relative w-full h-24 cursor-pointer">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover rounded"
                                            sizes="10vw"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <p className='para text-center'>At Experium, every season brings something unforgettable, from vibrant festivals to immersive cultural celebrations. Our events are designed to connect people through joy, color, music, and shared experiences in a one-of-a-kind eco-luxury setting.</p>

                    <Link href="/events" className="flex justify-center ">
                        <button className='clear-btn'>
                            EXPLORE EVENTS
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}