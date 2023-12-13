import React, { useState, useEffect } from 'react';

const Carousel = ({ images, slideDuration = 5000 }) => {
    const [activeSlideIndex, setactiveSlideIndex] = useState(0);

    const previousSlide = () => {
        const isFirstImage = activeSlideIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : activeSlideIndex - 1;
        setactiveSlideIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastImage = activeSlideIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : activeSlideIndex + 1;
        setactiveSlideIndex(newIndex);
    };

    const dots = (index) => {
        setactiveSlideIndex(index);
    };

    const changeWithKeys = (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            previousSlide();
        }
    };


    useEffect(() => {
        window.addEventListener('keydown', changeWithKeys);
        const timer = setTimeout(() => {
            nextSlide();
        }, slideDuration);

        return () => {
            window.removeEventListener('keydown', changeWithKeys);
            clearTimeout(timer);
        };
    }, [activeSlideIndex, slideDuration]);



    return (
        <div className="relative">
            <button
                onClick={previousSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>

            </button>
            <img src={images[activeSlideIndex]} alt={`Slide ${activeSlideIndex}`} className="w-full h-[600px] object-cover object-center" />
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>


            </button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 mx-1 rounded-full ${index === activeSlideIndex ? 'bg-black' : 'bg-gray-400'}`}
                        onClick={() => dots(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
