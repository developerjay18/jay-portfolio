import React, { useState } from 'react';

function Slider({ reviews }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setSlideIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="review-slider">
      <div
        className="review-slider-container"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p>{review.text}</p>
            <p className="review-author">{review.author}</p>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="slider-arrow left-arrow">
        &#9665;
      </button>
      <button onClick={nextSlide} className="slider-arrow right-arrow">
        &#9655;
      </button>
    </div>
  );
}

export default Slider;
