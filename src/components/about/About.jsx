import React, { useState, useEffect } from "react";
import "./about.css";
import { FaAward, FaFolderOpen } from "react-icons/fa";
import Me from "../../assets/my.jpg";
import { motion } from "framer-motion";
const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [animateTitle, setAnimateTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight;
        setAnimateTitle(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const image = new Image();
    image.src = Me;
    image.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <section id="about">
    <h5>Get TO Know</h5>
    <motion.h2
      initial={{ y: -30 }}
      animate={{ y: animateTitle ? 0 : -30 }} // Only animate when in view
      transition={{ delay: 0.1 }}
    >
      About Me
    </motion.h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            {imageLoaded ? (
              <img src={Me} alt="me_image" />
            ) : (
              <p>Loading image...</p>
            )}
          </div>
        </div>

        <motion.div 
        initial={{ x: -300 }}
        animate={{ x: animateTitle ? 0 : -300 }} // Only animate when in view
        transition={{ delay: 0.3 }}
        className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1 year experience</small>
            </article>

            <article className="about_card">
              <FaFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>10+ projects completed</small>
            </article>
          </div>

          <p>
            I had studied computer science in information technology and have
            gained a solid understanding of programming concepts and languages
            such as HTML, CSS, and JavaScript. i had done internship in react js
            so I am familiar with React, a popular JavaScript library for
            building user interfaces. I am a quick learner and am able to adapt
            to new technologies quickly. I am excited to take on new challenges
            and am eager to apply my skills to real-world projects. I am a team
            player and am always open to feedback and suggestions to improve my
            work. I am looking forward to building a career in web development
            and am confident that I can make valuable contributions to any team.
          </p>
          <div className="button">
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
