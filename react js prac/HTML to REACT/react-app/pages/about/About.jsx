import React from 'react'
import ServicesCard from '../../components/cards/ServicesCard'
import TestemonialCard from '../../components/cards/TestemonialCard'
import logo1 from '../../src/assets/logo-1-color.png'
import logo2 from '../../src/assets/logo-2-color.png'
import logo3 from '../../src/assets/logo-3-color.png'
import logo4 from '../../src/assets/logo-4-color.png'
import logo5 from '../../src/assets/logo-5-color.png'
import logo6 from '../../src/assets/logo-6-color.png'
function About() {
  return (
    <>
     <article className="about  active" data-page="about">

        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
            I enjoy
            turning complex problems into simple, beautiful and intuitive designs.
          </p>

          <p>
            My job is to build your website so that it is functional and user-friendly but at the same time attractive.
            Moreover, I
            add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
            across your
            message and identity in the most creative way. I created web design for many famous brand companies.
          </p>
        </section>


        
          {/* - service */}
      

        <ServicesCard/>

        
          {/* - testimonials */}
        

        <TestemonialCard/>


        
          {/* - testimonials modal */}
        

        <div className="modal-container" data-modal-container>

          <div className="overlay" data-overlay></div>

          <section className="testimonials-modal">

            <button className="modal-close-btn" data-modal-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img />
              </figure>

              <img src="./assets/images/icon-quote.svg" alt="quote icon" />
            </div>

            <div className="modal-content">

              <h4 className="h3 modal-title" data-modal-title>Daniel lewis</h4>

              <time datetime="2021-06-14">14 June, 2021</time>

              <div data-modal-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                  lot of experience
                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                  consectetur adipiscing
                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>

            </div>

          </section>

        </div>


        
          {/* - clients */}
        

        <section className="clients">

          <h3 className="h3 clients-title">Clients</h3>

          <ul className="clients-list has-scrollbar">

            <li className="clients-item">
              <a href="#">
                <img src={logo1} alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src={logo2} alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src={logo3} alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src={logo4} alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src={logo5} alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src={logo6} alt="client logo" />
              </a>
            </li>

          </ul>

        </section>

      </article>
    </>
  )
}

export default About