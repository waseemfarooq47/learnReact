import React from "react";
import "./Cards.css";

function Cards({ cardTitle, Likes, Duration, Thumbnail, Verify }) {
  return (
    <div className="cards-wrapper">
      <div className="card">
        <div className="card-img">
          <img src={Thumbnail} alt="thumbnail" />
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

            {Verify === true ? (
              <span>
                <strong>Verified:</strong> ✅
              </span>
            ) : (
              <span>
                <strong>Unverified:</strong> ❌
              </span>
            )}
          </div>

          <button  onClick={}>Subscribe 👆</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
