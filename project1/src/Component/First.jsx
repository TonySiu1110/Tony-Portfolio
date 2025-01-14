import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import Rellax from 'rellax';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Styling/Styling1.css';
import '../Styling/Styling2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import Testimonials from './Testimonials';


const First = () => {
  
  useEffect(() => {
    new Rellax('.rellax');
    AOS.init();

    // Simulate page load and hide preloader
    window.addEventListener('load', () => {
      setTimeout(() => setIsLoaded(true), 1000); // Add delay for preloader effect
    });
  }, []);
  return (
    <>
        <motion.header
        className="s-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 2.5 }}
      >
        <div className="row s-header__nav-wrap">
          <nav className="s-header__nav">
            <ul>
              <li><Link className="smoothscroll" to="hero" smooth={true} duration={500}>Home</Link></li>
              <li><Link className="smoothscroll" to="about" smooth={true} duration={500}>About</Link></li>
              <li><Link className="smoothscroll" to="resume" smooth={true} duration={500}>Resume</Link></li>
              <li><Link className="smoothscroll" to="portfolio" smooth={true} duration={500}>Workout</Link></li>
              <li><Link className="smoothscroll" to="testimonials" smooth={true} duration={500}>Project</Link></li>
            </ul>
          </nav>
        </div> 

        <a className="s-header__menu-toggle" href="#0" title="Menu">
          <span className="s-header__menu-icon"></span>
        </a>
      </motion.header>

      <motion.section
        id="hero"
        className="s-hero target-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="s-hero__bg rellax" data-rellax-speed="-7"></div>

        <div className="row s-hero__content">
          <div className="column">
            <div className="s-hero__content-about">
              <h1>I'm Tony Siu.</h1>
              <h3>
                I'm a Toronto based <span>Full Stack Developer</span>, <span>Data Engineer </span> and <span>Powerlifter</span> creating awesome and
                applications and data pipeline for companies that I have worked for! Let's <a className="smoothscroll" href="#about">start scrolling</a>
                and learn more <a className="smoothscroll" href="#about">about me</a>.
              </h3>

              <div className="s-hero__content-social">
                <a href="#0"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                <a href="#0"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#0"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://github.com/TonySiu1110" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/kinghoitony/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>

            </div> 
          </div>
        </div> 

        <div className="s-hero__scroll">
          <a href="#about" className="s-hero__scroll-link smoothscroll">
            <span className="scroll-arrow">
              <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  style={{
                      fill: "rgba(0, 0, 0, 1)"
                  }}
              >
                <path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z"></path>
              </svg>
            </span>
            
            <span className="scroll-text">Scroll Down</span>
          </a>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="s-about target-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="row">
          <div className="column large-3 tab-12">
            <img className="s-about__pic" src="/src/images/icon.jpg" alt="" />
          </div>
          <div className="column large-9 tab-12 s-about__content">
            <h3>About Me</h3>
            <p>
              I’m Tony Siu King Hoi, a Computer Science student at Toronto Metropolitan University, graduating in April 2026. I have over five years of coding experience and enjoy building solutions that merge creativity with functionality. My expertise lies in Python, Java, and data analysis, and I’ve worked on projects ranging from full-stack web applications to data-driven analytics tools. Professionally, I’ve gained experience in data modeling, ETL pipeline development, and full-stack development through internships in both government and private sectors. Fluent in English, Cantonese, and Mandarin, I thrive in collaborative environments and am passionate about leveraging technology to solve real-world problems.
            </p>

            <hr />

            <div className="row s-about__content-bottom">
              <div className="column w-1000-stack">
                <h3>Contact Details</h3>
                <p>
                  Tony Siu <br />
                  Toronto, Ontario, Canada <br />
                  <a href="tel:+1975432345">+647 861 XXXX</a> <br />
                  <a href="mailto:#0">tony.siu@torontomu.ca</a>
                </p>
              </div>
              <div className="column w-1000-stack">
                <a href="#0" className="btn btn--download">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ fill: "rgba(0, 0, 0, 1)" }}
                  >
                    <path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z"></path>
                    <path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z"></path>
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
<section id="resume" className="s-resume target-section">
      <div className="row s-resume__section">
        <div className="column large-3 tab-12">
          <h3 className="section-header-allcaps">Career</h3>
        </div>
        <div className="column large-9 tab-12">
          <div className="resume-block">
            <div className="resume-block__header">
              <h4 className="h3">Full Stack Developer</h4>
              <p className="resume-block__header-meta">
                <span>Treasury Board of Secretariat</span>
                <span className="resume-block__header-date">
                  Sep 2024 – Dec 2024
                </span>
              </p>
            </div>

            <p>
              <ul>
                <li>Developed a full-stack web application using React.js, Node.js, and Django to collect and process user data, resulting in streamlined data management and improved processing efficiency by 260%.</li>
                <li>Created the front-end for user-friendly data entry, handled JSON and XML formats, and implemented Python back-end services for data ingestion, validation, and transformation, improving data integrity and system efficiency.</li>
                <li>Developed and Designed ETL data pipelines using MS SQL, Python (NumPy and Pandas) to efficiently extract, transform, and load datasets of up to 500,000 records into databases.</li>
                <li>Analyzed up to 60,000 datasets to identify trends, patterns, correlations and errors and developed reports and visualizations with Power BI and Tableau to present insights clearly to stakeholders.</li>
                <li>Applied data normalization (1NF, 2NF, 3NF) in provincial internal systems to reduce redundancy, balancing denormalization to achieve a 170% performance improvement in analytical workloads.</li>
            </ul>
            </p>
          </div>

          <div className="resume-block">
            <div className="resume-block__header">
              <h4 className="h3">City of Brampton</h4>
              <p className="resume-block__header-meta">
                <span>Data Analyst</span>
                <span className="resume-block__header-date">
                Jan 2024 – Aug 2024
                </span>
              </p>
            </div>

            <p>
            - Developed more than 50 script-based programs (Python, PowerShell) to automate tasks and analyze data. <br />
            - Assisted with software application testing (black, white box testing & system, unit testing) <br />
            - Utilized Cloud computing platform (Azure) to process big data, analyzing up to 3000 datasets. <br />
            </p>
          </div>
        </div>
      </div>

      <div className="row s-resume__section">
        <div className="column large-3 tab-12">
          <h3 className="section-header-allcaps">Education</h3>
        </div>
        <div className="column large-9 tab-12">
          <div className="resume-block">
            <div className="resume-block__header">
              <h4 className="h3">Toronto Metropolitan University</h4>
              <p className="resume-block__header-meta">
                <span>Bachelor of Science (Hons), Computer Science</span>
                <span className="resume-block__header-date"> Sept 2021 – Apr 2026 </span>
              </p>
            </div>

            <p>
            The BSc (Hons) in Computer Science at Toronto Metropolitan University equips me with skills in software development, data analysis, and cloud computing. I have gained hands-on experience in programming languages such as Java, Python, and SQL, along with proficiency in frameworks like React and Spring Boot. The program focuses on problem-solving, data modeling, and cybersecurity, preparing me for a career in technology.
            </p>
          </div>


        </div>
      </div>

      <div className="row s-resume__section">
        <div className="column large-3 tab-12">
          <h3 className="section-header-allcaps">Skills</h3>
        </div>
        <div className="column large-9 tab-12">
          <div className="resume-block">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore vero quidem nobis maxime dolorem aliquam quisquam eum
              ipsum amet. Vitae aut atque fuga dolorem. Vel voluptatibus fugiat
              nam. Impedit aperiam nesciunt facilis! Porro architecto dicta
              inventore tempora ratione quia odio.
            </p>

            <ul className="skill-bars-fat">
              <li>
                <div className="progress percent90"></div>
                <strong>Python</strong>
              </li>
              <li>
                <div className="progress percent85"></div>
                <strong>Django/Flask</strong>
              </li>
              
              <li>
                <div className="progress percent85"></div>
                <strong>Java</strong>
              </li>
              <li>
                <div className="progress percent90"></div>
                <strong>Javascript</strong>
              </li>
              <li>
                <div className="progress percent70"></div>
                <strong>AWS/Azure</strong>
              </li>
              <li>
                <div className="progress percent80"></div>
                <strong>SQL</strong>
              </li>
              <li>
                <div className="progress percent100"></div>
                <strong>Leadership & Commuciation Skills</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="portfolio" className="s-portfolio target-section">
      <div className="row s-portfolio__header">
        <div className="column large-12">
          <h3>My Body Transformation</h3>
        </div>
      </div>

      <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
        <div className="column folio-item">
          <a href="#modal-01" className="folio-item__thumb year2020">
            <img
              src="/src/images/2020_body1.jpg"
              alt="Droplet"
            />
          </a>
        </div>

        <div className="column folio-item">
          <a href="#modal-02" className="folio-item__thumb year2021">
            <img
              src="/src/images/2021_body.jpg"
              alt="Lamp"
            />
          </a>
        </div>

        <div className="column folio-item">
          <a href="#modal-03" className="folio-item__thumb year2022">
            <img
              src="/src/images/2022_body.jpg"
              alt="Minimalism"
            />
          </a>
        </div>

        <div className="column folio-item">
          <a href="#modal-04" className="folio-item__thumb year2024">
            <img
              src="/src/images/body_2025.jpg"
              alt="Shutterbug"
            />
          </a>
        </div>


        
      </div>
    </section>

    <section className="s-cta">
      <div className="row">
        <div className="column">
          <h3 className="h2 section-desc">
            It is okay to be weak but not to stay weak
          </h3>
        </div>
      </div>

      <div className="row cta-content">
        <div className="column">
          <p>
          "It’s not about being better than someone else. It’s about being better than you were yesterday." -- Zyzz
          </p>

          <a href="#" className="btn btn--primary h-full-width">Get Started With my Program</a>
        </div>
      </div>
    </section>

    <Testimonials />

    <section id="contact" className="s-contact target-section">
      <div className="row s-contact__header">
        <div className="column large-12">
          <h3 className="section-header-allcaps">Time to connect with me!</h3>
        </div>
      </div>

      <div className="row s-contact__content">
        <div className="column large-7 medium-12">
          <h4 className="huge-text">
            Feel Free to connect me on Linkedin and email me if you have any job opportunities 
          </h4>
        </div>

        <div className="column large-4 medium-12">
          <div className="row contact-infos">
            <div className="column large-12 medium-6 tab-12">
              <div className="contact-block">
                <h5 className="contact-block__header">Email</h5>
                <p className="contact-block__content">
                  <a className="mailtoui" href="tony.siu@torontomu.ca">
                    tony.siu@torontomu.ca
                  </a>
                </p>
              </div>
            </div>
            <div className="column large-12 medium-6 tab-12">
              <div className="contact-block">
                <h5 className="contact-block__header">Phone</h5>
                <p className="contact-block__content">
                  <a href="tel:+1975432345">+1 (647) 861 XXXX</a>
                </p>
              </div>
            </div>

            <div className="column large-12">
              <a href="tony.siu@torontomu.ca" className="mailtoui btn btn--primary h-full-width">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default First;
