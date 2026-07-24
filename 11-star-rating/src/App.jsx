import "./App.css";
import React, { useState } from "react";

function App() {
  const [rating, setRating] = useState(0);
  return (
    <>
      <div className="container">
        <div className="star">
          <div className="inner-container">
            <p>Rate this Product</p>
            <div className="rating">
              {["★", "★", "★", "★", "★"].map((star,index) => (
                <span
                  className={index+1 <= rating ? "filledStar" : "empty"}
                  onClick={() => setRating(index+1)}
                  key={index}
                >
                  {star}
                </span>
              ))}
            </div>

            {/* <div className="rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  className={star <= rating ? "filledStar" : "empty"}
                  onClick={() => setRating(star)}
                  key={star}
                >
                  ★
                </span>
              ))}
            </div> */}
            
           <p> {rating == 0 ? "No Rating" : `Rating: ${rating}/5`} </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


