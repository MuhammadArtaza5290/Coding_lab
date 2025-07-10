import React from 'react'
import PortfolioCard from '../../components/cards/PortfolioCard'
import { NavLink } from 'react-router-dom'
function Portfolio() {
  return (
    <>
    <article className="portfolio" data-page="portfolio" style={{display: 'block'}}>

        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">

          <ul className="filter-list">

            <li className="filter-item">
              <button className="active" data-filter-btn><NavLink to='/portfolio/all'>All</NavLink></button>
            </li>

            <li className="filter-item">
              <button data-filter-btn><NavLink to='/portfolio/webdesign'>Web Design</NavLink></button>
            </li>

            <li className="filter-item">
              <button data-filter-btn><NavLink to='/portfolio/application'>Application</NavLink></button>
            </li>

            <li className="filter-item">
              <button data-filter-btn><NavLink to='/portfolio/webdevelopment'>Web Development</NavLink></button>
            </li>

          </ul>

          <div className="filter-select-box">

            <button className="filter-select" data-select>

              <div className="select-value" data-selecct-value>Select category</div>

              <div className="select-icon">
                <ion-icon name="chevron-down"></ion-icon>
              </div>

            </button>

            <ul className="select-list">

              <li className="select-item">
                <button data-select-item>All</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web design</button>
              </li>

              <li className="select-item">
                <button data-select-item>Applications</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web development</button>
              </li>

            </ul>

          </div>

         <PortfolioCard/>

        </section>

      </article>
    </>
  )
}

export default Portfolio