import React from 'react';
import "./portfolio.css";
import IMG6 from "../../assets/abc.svg";
import lightIMG from "../../assets/lightng.png";
import IMG1 from "../../assets/gateng.png"
import IMG2 from "../../assets/gate_admin.png"
import IMG7 from "../../assets/Screenshot 2023-02-07 222618.png";
import IMG4 from "../../assets/nurquest.png"

const data = [
  {
    id: 1,
    image: IMG1,
    title:
      "Gate Africa empowers users to effortlessly create and send guest invitations to their estates. Avaliable on play store and app store",
    github: "",
    demo: "https://gate.africa/",
  },
  {
    id: 2,
    image: IMG2,
    title:
      "Gate Africa Admin is an app designed for estate security personnel.",
    github: "",
    demo: "https://gate.com.ng/admin/signin.php",
  },
  {
    id: 3,
    image: IMG6,
    title: "Cardify - A fintech platform that has three major system wallet, Exchange and Bills, worked mainly on the bills system",
    github: "",
    demo: "https://app.cardify.co/"
  },
  {
    id: 4,
    image: IMG7,
    title: "Shortleters - A proptech system that deals with the booking, letting of shortlets apartments",
    github: "",
    // demo: "https://beta.shortleters.com/"
    demo:""
  },
  {
    id: 5,
    image: lightIMG,
    title: "LighNG - A bills plaatform where you can pay for your electricity bills from the comfort of your home.",
    github: "",
    demo: "https://light.ng/"
  },
  {
    id: 4,
    image: IMG4,
    title:
      "Nurquest - An Islamic compass. A journey of transformative enlightenment. It has features such as Quran, Hadiths, Islamic wallpaper, Islamic Scholar teachings, Arabic class and more. ",
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
