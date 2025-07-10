import React from 'react'
import project1 from '../../src/assets/project-1.jpg'
import project2 from '../../src/assets/project-2.png'
import project3 from '../../src/assets/project-3.jpg'
import project4 from '../../src/assets/project-4.png'
import project5 from '../../src/assets/project-5.png'
import project6 from '../../src/assets/project-6.png'
import project7 from '../../src/assets/project-7.png'
import project8 from '../../src/assets/project-8.jpg'
import project9 from '../../src/assets/project-9.png'
function PortfolioCard() {
  let portfolioData = [
    {
      image: project1,
      title: 'Finance',
      category: 'Web development'
    },
    {
      image: project2,
      title: 'Orizon',
      category: 'Web development'
    },
    {
      image: project3,
      title: 'Fundo',
      category: 'Web design'
    },
    {
      image: project4,
      title: 'Brawlhalla',
      category: 'Application'
    },
    {
      image: project5,
      title: 'DSM.',
      category: 'Web design'
    },
    {
      image: project6,
      title: 'MetaSpark',
      category: 'Web design'
    },
    {
      image: project7,
      title: 'Summary',
      category: 'Web development'
    },
    {
      image: project8,
      title: 'Task Manager',
      category: 'Applications'
    },
    {
      image: project9,
      title: 'Arrival',
      category: 'Web development'
    },
  ]
  return (
    <>
     <ul className="project-list">
      {portfolioData.map((val, index)=>{
        return(
          <li className="project-item  active" data-filter-item data-category="web development" key={index}>
              <a href="#">

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={val.image} alt="finance" loading="lazy" />
                </figure>

                <h3 className="project-title">{val.title}</h3>

                <p className="project-category">{val.category}</p>

              </a>
            </li>
        )
      })}
            

            
          </ul>
    </>
  )
}

export default PortfolioCard
