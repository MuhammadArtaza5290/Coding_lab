import React from 'react'
import iconDesign from '../../src/assets/icon-design.svg'
import iconDev from '../../src/assets/icon-dev.svg'
import iconPhoto from '../../src/assets/icon-photo.svg'
import iconApp from '../../src/assets/icon-app.svg'
function ServicesCard() {
  let servicesData =[
    {
      image: iconDesign,
      head: "Web design",
      para: "The most modern and high-quality design made at a professional level."
    },
    {
      image: iconDev,
      head: "Web development",
      para: "High-quality development of sites at the professional level."
    },
    {
      image: iconPhoto,
      head: "Moblie apps",
      para: "Professional development of applications for iOS and Android."
    },
    {
      image: iconApp,
      head: "Photography",
      para: "I make high-quality photos of any category at a professional level."
    },
  ]
  return (
    <>
    <section className="service">

          <h3 className="h3 service-title">What i'm doing</h3>

          <ul className="service-list">
            {
              servicesData.map((val, index)=>{
                return (
                   <li className="service-item">

              <div className="service-icon-box">
                <img src={val.image} alt="design icon" width="40"/>
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{val.head}</h4>

                <p className="service-item-text">{val.para}</p>
              </div>

            </li>
                )
              })
            }
           

           

          </ul>

        </section>

    </>
  )
}

export default ServicesCard

//  <li className="service-item">

//               <div className="service-icon-box">
//                 <img src="./assets/images/icon-dev.svg" alt="Web development icon" width="40" />
//               </div>

//               <div className="service-content-box">
//                 <h4 className="h4 service-item-title">Web development</h4>

//                 <p className="service-item-text">
//                   High-quality development of sites at the professional level.
//                 </p>
//               </div>

//             </li>

//             <li className="service-item">

//               <div className="service-icon-box">
//                 <img src="./assets/images/icon-app.svg" alt="mobile app icon" width="40" />
//               </div>

//               <div className="service-content-box">
//                 <h4 className="h4 service-item-title">Mobile apps</h4>

//                 <p className="service-item-text">
//                   Professional development of applications for iOS and Android.
//                 </p>
//               </div>

//             </li>

//             <li className="service-item">

//               <div className="service-icon-box">
//                 <img src="./assets/images/icon-photo.svg" alt="camera icon" width="40" />
//               </div>

//               <div className="service-content-box">
//                 <h4 className="h4 service-item-title">Photography</h4>

//                 <p className="service-item-text">
//                   I make high-quality photos of any category at a professional level.
//                 </p>
//               </div>

//             </li>