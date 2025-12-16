import React from 'react';
import "./experience.css"
import { BsPatchCheckFill } from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      {/* <h5>What Skills I have</h5> */}
      <h2>Backend, AWS & DevOps Skills</h2>

      <div className="container experience__container">
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div className="">
                <h4>Node.js &mdash; Express, NestJS</h4>
                <small className="text-light">Experienced</small>
              </div> 
            </article>

            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>RESTful APIs & Microservices</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Authentication & Authorization</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>API Design & Documentation</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div className="">
                <h4>JavaScript / TypeScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div className="">
                <h4>PHP (Laravel)</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            {/* <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div className="">
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article> */}

          </div>
        </div>

        {/* END OF BACKEND */}

        <div className="experience__cloud">
          <h3>AWS, DevOps & Databases</h3>
          <div className="experience_content">

            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div className="">
                <h4>AWS &mdash; EC2, ECS, S3, RDS, Lambda</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div className="">
                <h4>CI/CD Pipelines</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div className="">
                <h4>Docker & Containerisation</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div className="">
                <h4>Monitoring & Logging</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
            < BsPatchCheckFill className='experience__details-icon' />
              <div className="">
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              < BsPatchCheckFill className='experience__details-icon' />
              <div className="">
                <h4>MySQL & PostgreSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>



          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Experience;