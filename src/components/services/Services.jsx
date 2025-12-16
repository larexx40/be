import React from 'react';
import {BiCheck} from "react-icons/bi";
import "./services.css";


const Services = () => {
  return (
    <section id='services'>
      <h5>How I Can Help Your Team</h5>
      <h2>Backend, AWS & DevOps Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Backend Development (Node.js)</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Designing and building RESTful APIs and backend services with Node.js.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Integrating databases (MongoDB, PostgreSQL, MySQL) with secure data access layers.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Implementing authentication & authorization (JWT, sessions, role-based access control).</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Writing clean, testable backend code with automated tests for critical endpoints.</p>
            </li>
          </ul>
        </article>
        {/* END of Backend Development */}

        <article className="service">
          <div className="service__head">
            <h3>AWS Cloud Engineering</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Designing and deploying backend workloads on AWS (EC2, ECS, Lambda, S3, RDS).</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Building secure, scalable architectures with VPC, security groups and IAM best practices.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Implementing cost‑effective solutions using managed AWS services where appropriate.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Working with teams to review cloud architectures and improve reliability and performance.</p>
            </li>
          </ul>
        </article>

        {/* End of AWS Cloud Engineering */}

        <article className="service">
          <div className="service__head">
            <h3>DevOps & Automation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Setting up CI/CD pipelines (GitHub Actions and similar) for automated testing and deployment.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Containerising applications with Docker and preparing them for cloud-native deployment.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Infrastructure automation and configuration management using Infrastructure as Code tools.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Implementing monitoring, logging and alerting to keep production systems healthy.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services;