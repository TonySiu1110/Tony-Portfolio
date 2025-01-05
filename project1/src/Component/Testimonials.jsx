import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Styling/Styling1.css';
import '../Styling/Styling2.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="s-testimonials target-section">
      <div className="s-testimonials__bg"></div>

      <div className="row s-testimonials__header">
        <div className="column large-12">
          <h3>My Coding Project</h3>
        </div>
      </div>

      <div className="row s-testimonials__content">
        <div className="column">
          <Swiper
            spaceBetween={100}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            loop={false}            // Disable infinite loop
            preloadImages={false}   // Prevent images from preloading
            watchOverflow={true}     // Prevent unnecessary slides from rendering
            
          >
            {/* Testimonial 1 */}
            <SwiperSlide>
              <div className="testimonial-slider__author">
            
                <img
                  src="/src/images/fitness.png"
                  alt="Author image"
                  className="testimonial-slider__avatar"
                />
                <a href="https://github.com/Leonard12138/intelliFitHub" target="_blank" rel="noopener noreferrer">
                    <cite className="testimonial-slider__cite">
                        <strong>Fitness Application - intelliFitHub</strong>
                        <span>Presented by Tony Siu, Ken Tong</span>
                    </cite>
                </a>

              </div>
              <p>
                <ul>
                    <li>Developed a comprehensive web application for calculating daily calorie intake and one rep max for users.</li>
                    <li>Constructed the Java backend RESTFUL API using Object-Oriented Programming (OOP) principles, delivering an efficient and interactive fitness tool that streamlined users' fitness tracking experience.</li>
                    <li>Designed a responsive and user-friendly front-end interface with HTML, CSS, and JavaScript, providing an intuitive user experience across devices.</li>
                    <li>Integrated real-time data updates for users’ calorie intake and exercise performance using AJAX and RESTful API calls.</li>
                </ul>
                
                 <br />

              </p>
            </SwiperSlide>

            {/* Testimonial 2 */}
            <SwiperSlide>
              <div className="testimonial-slider__author">
                <img
                  src="/src/images/analyzer.png"
                  alt="Author image"
                  className="testimonial-slider__avatar"
                />
                <a href="https://github.com/Leonard12138/intelliFitHub" target="_blank" rel="noopener noreferrer">
                    <cite className="testimonial-slider__cite">
                        <strong>Coming Soon</strong>
                        <span>Presented by Tony Siu</span>
                    </cite>
                </a>

              </div>
              <p>
                <ul>
                    <li>Developed a comprehensive web application for calculating daily calorie intake and one rep max for users.</li>
                    <li>Constructed the Java backend RESTFUL API using Object-Oriented Programming (OOP) principles, delivering an efficient and interactive fitness tool that streamlined users' fitness tracking experience.</li>
                    <li>Designed a responsive and user-friendly front-end interface with HTML, CSS, and JavaScript, providing an intuitive user experience across devices.</li>
                    <li>Integrated real-time data updates for users’ calorie intake and exercise performance using AJAX and RESTful API calls.</li>
                </ul>
                
                 <br />

              </p>
            </SwiperSlide>

            
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
