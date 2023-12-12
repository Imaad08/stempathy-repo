"use client";
import React, { useState } from 'react';
import { BsChevronCompactLeft as LeftArrowIcon, BsChevronCompactRight as RightArrowIcon } from 'react-icons/bs';
import { RxDotFilled as DotIcon } from 'react-icons/rx';

interface Slide {
    imageURL: string;
}

const UpdatedSliderComponent: React.FC = () => {
    const updatedSlides: Slide[] = [
        {
            imageURL: 'https://i.ibb.co/XDNffPB/pexels-binyamin-mellish-186077-1.jpg',
        },
        {
            imageURL: 'https://static.wixstatic.com/media/1df416_717fad7f2a0e4fd1a623e7a5c8d6fb45~mv2.png/v1/fill/w_679,h_521,al_c,lg_1,q_85,enc_auto/Screenshot%202023-09-18%20215025.png',
        },
        {
            imageURL: 'https://i.ibb.co/XDNffPB/pexels-binyamin-mellish-186077-1.jpg',
        },
        {
            imageURL: 'https://static.wixstatic.com/media/1df416_717fad7f2a0e4fd1a623e7a5c8d6fb45~mv2.png/v1/fill/w_679,h_521,al_c,lg_1,q_85,enc_auto/Screenshot%202023-09-18%20215025.png',
        },
        {
            imageURL: 'https://i.ibb.co/XDNffPB/pexels-binyamin-mellish-186077-1.jpg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const goToPrevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? updatedSlides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNextSlide = () => {
        const isLastSlide = currentIndex === updatedSlides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='w-full m-auto max-w-[700px] py-16 px-4 relative group h-[450px]'>
            <div
                style={{ backgroundImage: `url(${updatedSlides[currentIndex].imageURL})` }}
                className='w-full h-full bg-center bg-cover rounded-2xl duration-500'
            ></div>
            <div className='absolute left-5 top-[50%] -translate-x-0 translate-y-[-50%] p-2 bg-black/20 text-white rounded-full group-hover:block cursor-pointer text-2xl'>
                <LeftArrowIcon onClick={goToPrevSlide} size={30} />
            </div>
            <div className='absolute right-5 top-[50%] -translate-x-0 translate-y-[-50%] p-2 bg-black/20 text-white rounded-full group-hover:block cursor-pointer text-2xl'>
                <RightArrowIcon onClick={goToNextSlide} size={30} />
            </div>
            <div className='flex justify-center py-2 top-4'>
                {updatedSlides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='cursor-pointer text-2xl'
                    >
                        <DotIcon />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpdatedSliderComponent;
