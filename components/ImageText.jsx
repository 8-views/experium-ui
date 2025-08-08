"use client"
import Image from 'next/image'
import Stick from './Stick'

export default function ImageText({
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

  // Pick the first image or fallback
  const image = images[0] || {
    src: "/placeholder.svg",
    alt: "Default Image",
  }

  return (
    <div className={`w-full ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-4 py-8 lg:py-8">
      <h2 className="heading text-center">{heading}</h2>
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16">

          {/* Text Section */}
          <div className={`text-center lg:text-left lg:w-3/4 w-full space-y-4 ${textOrder}`}>
            <div className="sm:space-y-4 space-y-2">
              <h2 className="text-3xl sm:text-3xl text-center lg:text-4xl font-bold text-brown leading-tight">
                {title}
              </h2>
        

             
            </div>

           <p
        className="para text-center"
        dangerouslySetInnerHTML={{ __html: description }}
      />

            <div className="pt-4 flex items-center justify-center mx-auto">
              <button className=" clear-btn ">
                {buttonLabel}
              </button>
            </div>
          </div>

          {/* Single Image Section */}
          <div className={`w-full ${imageOrder}`}>
            <div className="relative w-full">
              <Image
                src={image.src}
                alt={image.alt || "Showcase image"}
                width={1000}
                height={337}
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
