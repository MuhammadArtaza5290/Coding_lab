import React from "react";

function InfoTile() {
  let tilesInfo = [
    {
      icon: <ion-icon name="mail-outline"></ion-icon>,
      para: "Email",
      link: "richard@example.com",
    },
    {
      icon: <ion-icon name="phone-portrait-outline"></ion-icon>,
      para: "Phone",
      link: "+1 (213) 352-2795",
    },
    {
      icon: <ion-icon name="calendar-outline"></ion-icon>,
      para: "Birthday",
      link: "12-11-2002",
    },
    {
      icon: <ion-icon name="location-outline"></ion-icon>,
      para: "Location",
      link: "Sacramento, California, USA",
    },
  ];

  return (
    <>
      <ul className="contacts-list">
        {tilesInfo.map((val, index) => {
          return (
            <li className="contact-item" key={index}>
              <div className="icon-box">{val.icon}</div>

              <div className="contact-info">
                <p className="contact-title">{val.para}</p>
                <a href="mailto:richard@example.com" className="contact-link">
                  {val.link}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default InfoTile;

