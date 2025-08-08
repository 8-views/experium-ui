"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Stick from './Stick'

export default function SliderText({
    title,
    subtitle,
    description,
    heading,
    buttonLabel = "VIEW ALL ACTIVITIES",
    images = [],
    textFirstOnDesktop = false,
    backgroundColor = "bg-white",
}) {
    const textOrder = textFirstOnDesktop ? "order-2 lg:order-1" : "order-2 lg:order-2"
    const imageOrder = textFirstOnDesktop ? "order-1 lg:order-2" : "order-1 lg:order-1"

    return (
        <div className={`w-full ${backgroundColor}`}>
            <div className="max-w-7xl mx-auto px-4  lg:px-4 py-8 lg:py-16">
             <h2 className="heading text-center">{heading}</h2>
                <div className="grid items-center grid-cols-1 lg:grid-cols-2  gap-4 md:gap-16 min-h-[500px]">

                    {/* Text Section */}
                    <div className={`text-center lg:text-left lg:w-3/4  w-full space-y-4 ${textOrder}`}>
                        <div className="sm:space-y-4  space-y-2  ">
                            <h3 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-brandColor leading-tight">
                                {title}
                            </h3>
                            <Stick />

                            {subtitle && (
                                <h3 className="text-lg sm:text-2xl lg:text-2xl text-dsrkbrown font-semibold">
                                    {subtitle}
                                </h3>
                            )}
                        </div>

                        <p className="!text-darkbrown para">
                            {description}
                        </p>

                        <div className="pt-4">
                            <button

                                className="clear-btn "
                            >
                                {buttonLabel}
                            </button>
                        </div>
                    </div>

                    {/* Image Slider Section */}
                    <div className={`w-full ${imageOrder}`}>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation={false}
                            pagination={{
                                clickable: true,
                               
                            }}
                            autoplay={
                               true
                            }
                            loop={true}
                            className="image-slider-swiper "
                        >
                            {images.map((image) => (
                                <SwiperSlide key={image.id}>
                                    <div className="relative  w-full ">
                                        <Image
                                            src={image.src || "/placeholder.svg"}
                                            alt={image.alt}
                                            width={1000}
                                            height={468}
                                            // fill
                                            className="object-cover  "
                                            //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                            priority={image.id === 1}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

        
            <style jsx global>{`
        .image-slider-swiper .swiper-pagination {
          position: relative !important;
          margin-top: 1.5rem !important;
          text-align: center;
        }
        
        .image-slider-swiper .swiper-pagination-bullet {
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
        }
        
        .image-slider-swiper .swiper-pagination-bullet:hover {
          transform: scale(1.2);
        }

        @media (max-width: 1024px) {
          .image-slider-swiper .swiper-pagination {
            margin-top: 1rem !important;
          }
        }
      `}</style>
        </div>
    )
}
