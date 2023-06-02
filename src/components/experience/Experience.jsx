import React,{useState,useEffect} from 'react'
import './experience.css'
import {BsPatchCheckFill} from "react-icons/bs"

import { motion } from "framer-motion";

const Experience = () => {
   const [animateTitle, setAnimateTitle] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
       const element = document.getElementById("experience");
       console.log(element);
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
 
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <motion.h2
       initial={{ y: -150 }}
       animate={{ y: animateTitle ? 0 : -150 }} // Only animate when in view
       transition={{ delay: 0.1 }}
      >My Experience</motion.h2>
      <motion.div 
      initial={{ x: -400 }}
      animate={{ x: animateTitle ? 0 : -500 }} // Only animate when in view
      transition={{ delay: 0.3 }}
      className='container experience_container' >
        
          <div className='experience_contents' >
          <article className='experience_content' >
             <BsPatchCheckFill className='experience_content-icon' />
             <div>
             <h4>HTML</h4>
             <small className='text-light' > Experienced</small>
             </div>
            
          </article>
          <article className='experience_content' >
             <BsPatchCheckFill className='experience_content-icon'/>
            <div> <h4>CSS</h4>
             <small className='text-light' > Experienced</small></div>
          </article>
          <article className='experience_content' >
             <BsPatchCheckFill className='experience_content-icon'/>
             <div><h4>BOOTSTRAP</h4>
             <small className='text-light' > Experienced</small></div>
          </article>
          <article className='experience_content' >
             <BsPatchCheckFill className='experience_content-icon'/>
             <div><h4>JAVASCRIPT</h4>
             <small className='text-light' > Experienced</small></div>
          </article>
          <article className='experience_content' >
             <BsPatchCheckFill className='experience_content-icon'/>
             <div><h4>TYPESCRIPT</h4>
             <small className='text-light' > Experienced</small></div>
          </article>
          <article className='experience_content' >
             <BsPatchCheckFill className='experience_content-icon'/>
             <div><h4>REACT</h4>
             <small className='text-light' > Experienced</small></div>
          </article>
          <article className='experience_content' >
             <BsPatchCheckFill className='experience_content-icon'/>
             <div><h4>REDUX/REDUX-TOOLKIT</h4>
             <small className='text-light' > Experienced</small></div>
          </article>
          <article className='experience_content' >
             <BsPatchCheckFill className='experience_content-icon'/>
            <div> <h4>AXIOS</h4>
             <small className='text-light' > Experienced</small></div>
          </article>
          <article className='experience_content' >
             <BsPatchCheckFill className='experience_content-icon'/>
             <div><h4>MATARIAL UI</h4>
             <small className='text-light' > Experienced</small></div>
          </article>
          <article className='experience_content' >
             <BsPatchCheckFill className='experience_content-icon'/>
             <div><h4>FIREBASE</h4>
             <small className='text-light' > Experienced</small></div>
          </article>
          </div>
        
      </motion.div>
    </section>
  )
}

export default Experience