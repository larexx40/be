import React from 'react';
import "./portfolio.css";
import IMG6 from "../../assets/abc.svg";
import lightIMG from "../../assets/lightng.png";
import IMG1 from "../../assets/gateng.png";
import IMG7 from "../../assets/Screenshot 2023-02-07 222618.png";
import IMG4 from "../../assets/nurquest.png";
import savetobuy from "../../assets/savetobuy_home.png";

const data = [
  {
    id: 1,
    image: savetobuy,
    title:
      "SaveToBuy - A savings and payments platform that helps users plan and pay for products over time. Worked on core backend integrations and payment flows.",
    github: "",
    demo: "https://savetobuy.io",
  },
  {
    id: 2,
    image: IMG6,
    title:
      "Cardify - A fintech platform with three major systems: Wallet, Exchange and Bills. Contributed mainly to the bills system.",
    github: "",
    demo: "https://app.cardify.co/",
  },
  {
    id: 3,
    image: IMG1,
    title:
      "Gate Africa empowers users to effortlessly create and send guest invitations to their estates. Available on Play Store and App Store.",
    github: "",
    demo: "https://gate.africa/",
  },
  {
    id: 4,
    image: IMG7,
    title:
      "Shortleters - A proptech platform for booking and managing short‑let apartments.",
    github: "",
    // demo: "https://beta.shortleters.com/"
    demo: "",
  },
  {
    id: 5,
    image: lightIMG,
    title:
      "LighNG - A bills platform where you can conveniently pay your electricity bills from the comfort of your home.",
    github: "",
    demo: "https://light.ng/",
  },
  {
    id: 6,
    image: IMG4,
    title:
      "Nurquest - An Islamic compass and learning platform featuring Quran, Hadiths, Islamic wallpapers, scholar teachings, Arabic classes and more.",
    github: "",
    demo: "https://www.nurquest.com/",
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt="image1" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  {
                    github === ""? (
                      <button className='btn' target="_blank" rel="noreferrer">Private Repo</button>
                    ):(
                      <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                    )
                  }

                  {
                    demo.toLowerCase() === ""?(
                      <button  className='btn btn-primary'>Not yet Deployed</button>
                    ):(
                      <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                    )
                  }
                </div> 
              </article>
            )
          })
        }
      </div>

      
    </section>
  )
}

export default Portfolio
