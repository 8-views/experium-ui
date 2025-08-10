import React from 'react'

const Video = () => {
    return (
        <div className='bg-cream'>
        <div className='container mx-auto px-4'>
        <div className="  max-w-5xl -mt-7  pb-8 md:pb-14 lg:pb-16     space-y-6 md:space-y-8 mx-auto ">
            <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 rounded-full p-4 md:p-6 shadow-lg hover:shadow-xl transform hover:scale-105">
                        {/* <Play className="w-8 h-8 md:w-12 md:h-12 text-gray-700 ml-1" fill="currentColor" /> */}
                    </button>
                </div>

                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300"></div>
            </div>




            <div className="text-center">
                <button
                    variant="outline"
                    className="clear-btn "
                >
                    VIEW GALLERY
                </button>
            </div>
        </div>
        </div>
        </div>

    )
}

export default Video