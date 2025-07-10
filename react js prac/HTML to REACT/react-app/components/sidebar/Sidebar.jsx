import React from 'react'
import InfoTile from '../info-tile/InfoTile'
import MyAvatar from '../../src/assets/my-avatar.png'
function Sidebar() {
  return (
    <>
    <aside className="sidebar" data-sidebar>

      <div className="sidebar-info">

        <figure className="avatar-box">
          <img src={MyAvatar} alt="Richard hanrick" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">Richard hanrick</h1>

          <p className="title">Web developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>

      </div>

      <div className="sidebar-info_more">

        <div className="separator"></div>

       <InfoTile/>

        <div className="separator"></div>

        <ul className="social-list">

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon className = "socials-icons" name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon className = "socials-icons" name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon className = "socials-icons" name="logo-instagram"></ion-icon>
            </a>
          </li>

        </ul>

      </div>

    </aside>

    </>
  )
}

export default Sidebar