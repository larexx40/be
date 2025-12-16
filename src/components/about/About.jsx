import React from 'react';
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaAward } from 'react-icons/fa';
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

const about_data = {
  summary:
    "Backend-focused software engineer specialising in Node.js, RESTful APIs, databases, AWS and DevOps practices. I enjoy designing scalable backend systems, automating deployments and monitoring, and collaborating with teams to ship reliable features from development to production.",
  experience: "4",
  clients: "10",
  projects: "10",
  aboutImage: ME,
}

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
              <img src={about_data.aboutImage} alt="About Images" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>{about_data.experience}+ Years Working</small>
            </article>
          
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small> {about_data.clients}+ Clients Nationwide</small>
            </article>
          
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>{about_data.projects}+ Completed Projects</small>
            </article>
          </div>

          <p>{about_data.summary}</p>

          <a href="#contact" className='btn btn-primary'>Lets Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About;