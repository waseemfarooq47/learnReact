import React from "react";
import "./Cards.css";

function Cards({ cardTitle, Likes, Duration }) {
  let img =
    "https://indiater.com/wp-content/uploads/2021/06/free-fortnite-game-thumbnail-banner-design-psd-template.jpg";
  return (
    <div className="cards-wrapper">
      <div className="card">
        <div className="card-img">
          <img src={img} alt="thumbnail" />
        </div>
        <div className="card-details">
          <span className="card-title">{cardTitle}</span>

          <div className="likes-duration">
            <span>
              <strong>Likes:</strong> {Likes}
            </span>
            <span>
              <strong>Duration:</strong> {Duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
