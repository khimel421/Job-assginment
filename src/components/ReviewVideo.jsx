import React, { useRef, useState } from 'react'
import { FaCirclePlay } from "react-icons/fa6";
export default function ReviewVideo() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handlePause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className=''>
            <section>
                <div className="relative w-full">
                    {/* Video Element */}
                    <video
                        ref={videoRef}
                        width={600}

                        onClick={isPlaying ? handlePause : handlePlay}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        className="w-full cursor-pointer "
                    >
                        <source src="chicken-video.mp4" type="video/mp4" />
                       
                    </video>

                    {/* Custom Play Button */}
                    {!isPlaying && (
                        <button
                            onClick={handlePlay}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex items-center justify-center"
                        >
                            <FaCirclePlay className='text-yellow-300 text-6xl bg-black rounded-full border-none' />
                        </button>
                    )}
                </div>
            </section>
        </div>
    )
}
