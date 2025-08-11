import React from 'react'
function getVideoId(url) {
    if (!url) return '';

    // Handle different YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
        ? match[2]
        : '';
}
const IframeComponent = ({ closeModal, currentVideo }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div className="relative z-10 w-full max-w-4xl mx-auto p-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                    <div className="flex justify-end p-2">
                        <button
                            onClick={closeModal}
                            className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition duration-200 z-20"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                        <iframe
                            src={
                                currentVideo?.videoUrl?.includes('?')
                                    ? `${currentVideo.videoUrl}&rel=0&playlist=${getVideoId(currentVideo.videoUrl)}&modestbranding=1&controls=1&showinfo=0`
                                    : `${currentVideo.videoUrl}?rel=0&playlist=${getVideoId(currentVideo.videoUrl)}&modestbranding=1&controls=1&showinfo=0`
                            }
                            title={currentVideo?.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IframeComponent