import React, { useState, useEffect, useRef } from 'react';

// Example image filenames in your public folder (e.g., /public/images/)
const images = [
    '/work-1.png',
    '/work-2.png',
    '/work-3.png',
    '/work-4.png',
    '/work-5.png',
];

const VISIBLE_SLIDES = 3;
const AUTO_SLIDE_INTERVAL = 1000; // 3 seconds

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const intervalRef = useRef(null);

    // Auto slide effect
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, AUTO_SLIDE_INTERVAL);

        return () => clearInterval(intervalRef.current);
    }, []);

    // Calculate visible slides (wrap around)
    const getVisibleSlides = () => {
        let slides = [];
        for (let i = 0; i < VISIBLE_SLIDES; i++) {
            slides.push(images[(current + i) % images.length]);
        }
        return slides;
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            (prev - 1 + images.length) % images.length
        );
    };

    const nextSlide = () => {
        setCurrent((prev) =>
            (prev + 1) % images.length
        );
    };

    // Pause auto-slide on hover
    const handleMouseEnter = () => clearInterval(intervalRef.current);
    const handleMouseLeave = () => {
        intervalRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, AUTO_SLIDE_INTERVAL);
    };

    return (
        <div
            style={{
                position: 'relative',
                width: '700px',
                margin: 'auto',
                overflow: 'hidden',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div style={{
                display: 'flex',
                transition: 'transform 0.5s',
                gap: '16px',
                justifyContent: 'center',
            }}>
                {getVisibleSlides().map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Slide ${((current + idx) % images.length) + 1}`}
                        style={{
                            width: '220px',
                            height: '300px',
                            objectFit: 'cover',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        }}
                    />
                ))}
            </div>
            <button
                onClick={prevSlide}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '10px',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    cursor: 'pointer',
                    zIndex: 1,
                }}
                aria-label="Previous Slide"
            >
                &#8592;
            </button>
            <button
                onClick={nextSlide}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    cursor: 'pointer',
                    zIndex: 1,
                }}
                aria-label="Next Slide"
            >
                &#8594;
            </button>
            <div style={{ textAlign: 'center', marginTop: '8px' }}>
                {images.map((_, idx) => (
                    <span
                        key={idx}
                        style={{
                            display: 'inline-block',
                            width: '10px',
                            height: '10px',
                            margin: '0 4px',
                            borderRadius: '50%',
                            background: idx === current ? '#333' : '#ccc',
                            cursor: 'pointer',
                        }}
                        onClick={() => setCurrent(idx)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;