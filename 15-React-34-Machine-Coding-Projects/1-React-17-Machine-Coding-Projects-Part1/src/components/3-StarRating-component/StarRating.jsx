import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ numOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(i) {
    console.log(i);
    setRating(i);
  }

  function handleMouseMove(i) {
    console.log(i);
    setHover(i);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="flex items-center gap-2">
      {[...Array(numOfStars)].map((item, i) => {
        i += 1;
        return (
          <FaStar
            className={
              i <= (hover || rating) ? "text-yellow-400" : `text-black`
            }
            key={i}
            size={40}
            onClick={() => handleClick(i)}
            onMouseMove={() => handleMouseMove(i)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
