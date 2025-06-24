import { assets, workData } from '@/assets/assets';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';

const VISIBLE_SLIDES = 3;

const Work = (isDarkMode) => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  // Auto slider effect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % workData.length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % workData.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + workData.length) % workData.length);

  // Get visible slides (looping)
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < VISIBLE_SLIDES; i++) {
      slides.push(workData[(current + i) % workData.length]);
    }
    return slides;
  };

  const visibleSlides = getVisibleSlides();

  // Handle click for each slide
  const handleSlideClick = (slide) => {
    if (slide.links && Array.isArray(slide.links) && slide.links.length > 0) {
      // Open all links in new tabs
      slide.links.forEach(link => {
        window.open(link, '_blank');
      });
    } else if (slide.link) {
      window.open(slide.link, '_blank');
    } else {
      window.open('https://www.behance.net/gallery/228535089/UX-Case-Study-Redesigning-an-ERP-System', '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className='text-center text-5xl font-Ovo'
      >
        My Latest Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        Welcome to my UI UX portfolio! Expolore a collection of projects
        showcasing my expertise in designing Product and Services.
      </motion.p>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='relative flex flex-col items-center my-10'
      >
        <div className="flex gap-6 w-full justify-center">
          {visibleSlides.map((slide, idx) => (
            <motion.div
              key={slide.title + idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='aspect-square w-full max-w-xs bg-no-repeat bg-cover bg-center rounded-lg
                relative cursor-pointer group shadow-xl flex flex-col justify-end'
              style={{ backgroundImage: `url(${slide.bgImage})` }}
              onClick={() => handleSlideClick(slide)}
              tabIndex={0}
              role="button"
              onKeyPress={e => {
                if (e.key === 'Enter' || e.key === ' ') handleSlideClick(slide);
              }}
            >
              <div className='bg-white w-10/12 rounded-md absolute bottom-5
                left-1/2 -translate-x-1/2 py-3 px-5 flex items-center
                justify-between duration-500 group-hover:bottom-7 shadow-md'
              >
                <div>
                  <h2 className='font-semibold '>{slide.title} </h2>
                  <p className='text-sm text-gray-700'>{slide.description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                  <Image src={assets.send_icon} alt='send icon' className='w-5' />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Carousel Controls */}
        <div className='flex justify-center gap-4 mt-6'>
          <button
            onClick={prevSlide}
            className='p-2 rounded-full border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition'
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className='p-2 rounded-full border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition'
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
        {/* Dots */}
        <div className='flex justify-center gap-2 mt-2'>
          {workData.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full ${idx === current ? 'bg-black dark:bg-white' : 'bg-gray-300 dark:bg-gray-600'}`}
            />
          ))}
        </div>
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href=""
        className='w-max flex items-center justify-center gap-2 text-gray-700
          border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
        onClick={() => window.open('https://www.behance.net/raxx08928b6', '_blank')}
      >
        Click here to View More
        <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4' />
      </motion.a>
    </motion.div>
  );
};

export default Work;

