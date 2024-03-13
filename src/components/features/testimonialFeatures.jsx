import React, { useState } from 'react';
import '../../components/testimonial/testimonial.css'

const TestimonialsCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonial-carousel">
      <div className="testimonial">
        <p>{testimonials[currentIndex].text}</p>
        <p>- {testimonials[currentIndex].author}</p>
      </div>

      <div className="carousel-controls">
        <button className='arrowRight' onClick={prevTestimonial}>&lt;</button>
        <button className='arrowLeft' onClick={nextTestimonial}>&gt;</button>
      </div>
    </div>
  );
};
export default TestimonialsCarousel;
