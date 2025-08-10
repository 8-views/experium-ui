
import { experiumImageUrl } from '@/utils/common';
import Image from 'next/image';

export default function Banner() {
    return (
        <section className="relative h-[140vh] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={experiumImageUrl('home-banner.webp')}
                    alt="Beautiful garden landscape with topiary trees and people in colorful dresses"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                />
                {/* Overlay for better text readability */}
                {/* <div className="absolute inset-0 bg-black/20"></div> */}
            </div>

            {/* Content Container */}
            <div className=" z-10 flex h-400 flex-col px-4 sm:px-6 lg:px-8">
                {/* Logo Container */}
                <div className="mb-8 flex flex-col items-center space-y-6">
                    {/* Logo */}
                    <div className="flex items-center justify-center">
                        <Image
                            src={experiumImageUrl('logo.svg')}
                            height={120}
                            width={120}
                        />
                    </div>

                    {/* Tagline */}
                    <div className="text-center">
                        <p className="text-lg text-white/90 sm:text-xl lg:text-2xl">
                            Not in London. Not in Paris. Right here in Hyderabad.
                        </p>
                        <p className="mt-2 text-sm text-white/80 sm:text-base lg:text-lg">
                            A world-class destination crafted for India
                        </p>
                    </div>
                </div>

                {/* Optional CTA Button */}
                <div className="mt-8">
                    <button className="transform rounded-full bg-white/20 px-8 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50">
                        Discover More
                    </button>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 transform">
                <div className="flex space-x-2">
                    <div className="h-2 w-2 rounded-full bg-white/60"></div>
                    <div className="h-2 w-2 rounded-full bg-white/40"></div>
                    <div className="h-2 w-2 rounded-full bg-white/20"></div>
                </div>
            </div>
        </section>
    );
}