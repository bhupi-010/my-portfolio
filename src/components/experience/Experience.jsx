import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from "react-icons/bs"


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container' >
        
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
        
      </div>
    </section>
  )
}

export default Experience