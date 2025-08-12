'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowRight } from 'lucide-react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css';

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image';
import { experiumImageUrl } from '../utils/common';
import IframeComponent from './IframeComponent';

const ViralVideos = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    const videos = [
           {
            id: 2,
            thumbnailUrl: experiumImageUrl('love-note-3.png'),
            videoUrl:
                'https://www.youtube.com/embed/MZJLWiHQffs',
            title: '',
             heading: 'Mr Chiranjeevi ',
             paragraph: 'At Experium, every experience becomes a memory...'
        },
        {
            id: 1,
            thumbnailUrl: experiumImageUrl('love-note-1.png'),
            videoUrl: 'https://youtube.com/embed/Ak-N4AVDaAc',
            title: 'Our Happy Client - Birla Open Minds I Client Stories I 8 View',
                     heading: 'Siddu Jonnalagadda',
             paragraph: 'The gardens are surreal....'
        },
     
        {
            id: 3,
            thumbnailUrl: experiumImageUrl('love-note-2.png'),
            videoUrl: 'https://youtube.com/embed/ZIJj4NLp4bo',
            title: '',
            heading: 'Vaishnavi Chaitanya',
             paragraph: 'Attention to detail is mind-blowing...,'
        },
        // {
        //     id: 4,
        //     thumbnailUrl: experiumImageUrl('love-note-1.png'),
        //     videoUrl: 'https://www.youtube.com/embed/NZNzvl1wPSE?rel=0',
        //     title: 'Exploring Akshara Ananda with Founder Kavitha Mantha',
               
        // },
    ];

    const handleVideoClick = (video) => {
        setCurrentVideo(video);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setCurrentVideo(null);
    };

    return (
        <div className="viral-videos-container w-full max-w-6xl mx-auto px-4 py-12">
        <h2 className="heading text-center ">Love Notes</h2>
        <p className='para text-center mb-8'>At Experium, every experience becomes a memory, <br></br>and our guests say it best. Here’s what they had to share:</p>
            <Swiper



                pagination={{
                    clickable: true,

                }}
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                // centeredSlides={true}
                // loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    1024: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    0: { slidesPerView: 1 },
                }}
            >
                {videos.map((video) => (
                    <SwiperSlide key={video.id}>
                        <div
                            className="relative rounded-lg overflow-hidden cursor-pointer"
                            onClick={() => handleVideoClick(video)}
                        >
                            <div className="relative h-fit" style={{ aspectRatio: '1 / 1.2' }}>
                                <Image
                                    src={video.thumbnailUrl}
                                    alt={video.title}
                                    height={1000}
                                    width={1000}
                                    style={{ objectFit: 'cover' }}
                                    priority
                                />
                                <div className='absolute bottom-0 w-full  '>
                                    <div className='p-6 flex items-center justify-between g-4 '>
                                        <div className=''>
                                            <span className='text-white font-semibold text-base'>{video.heading}</span>
                                            <p className='text-gray-300  text-sm   ' >{video.paragraph}</p>
                                        </div>
                                        <a className='border backdrop-blur-2xl bg-white/10 text-white border-white border-2 px-5 py-2 rounded-full '>
                                                 <ArrowRight />
                                                 
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Video Modal */}
            {showModal && (
                <IframeComponent closeModal={closeModal} currentVideo={currentVideo} />
            )}
        </div>
    );
};

export default ViralVideos;
