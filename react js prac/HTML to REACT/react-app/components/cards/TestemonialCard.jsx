import React from 'react'
import Avatar1 from '../../src/assets/avatar-1.png'
import Avatar2 from '../../src/assets/avatar-2.png'
import Avatar3 from '../../src/assets/avatar-3.png'
import Avatar4 from '../../src/assets/avatar-4.png'
function TestemonialCard() {
  let TestimonialData =[
    {
      image: Avatar1,
      head: "Daniel lewis",
      para: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has alot of experienceand is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
    },
    {
      image: Avatar2,
      head: "Jessica Miller",
      para: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
    },
    {
      image: Avatar3,
      head: "Emily evans",
      para: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has alot of experienceand is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
    },
    {
      image: Avatar4,
      head: "Henry william",
      para: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has alot of experienceand is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
    },
  ]
  return (
    <>
    <section className="testimonials">

          <h3 className="h3 testimonials-title">Testimonials</h3>

          <ul className="testimonials-list has-scrollbar" >
            {TestimonialData.map((val, index)=>{
              return(
                <li className="testimonials-item" key={index}>
              <div className="content-card" data-testimonials-item>

                <figure className="testimonials-avatar-box">
                  <img src={val.image} alt="Daniel lewis" width="60" data-testimonials-avatar />
                </figure>

                <h4 className="h4 testimonials-item-title" data-testimonials-title>{val.head}</h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>{val.para}</p>
                </div>

              </div>
            </li>
              )
            })}
            

            

          </ul>

        </section>
    </>
  )
}

export default TestemonialCard