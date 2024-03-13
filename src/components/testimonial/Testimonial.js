import React from 'react';
import TestimonialsCarousel from '../features/testimonialFeatures.jsx';
import './testimonial.css';

const App = () => {
  const testimonials = [
    {
      text: 'Amazing service! The team was very professional and efficient.',
      author: 'John Doe',
    },
    {
      text: 'I highly recommend this company. They exceeded my expectations.',
      author: 'Jane Smith',
    },
    // Add more testimonials as needed
  ];

  return (
    <div className='testimonial_container'>
      <h2 className='testimonial_heading'>What my client are saying about me</h2>
      <TestimonialsCarousel testimonials={testimonials} />
    </div>
  );
};

export default App;
