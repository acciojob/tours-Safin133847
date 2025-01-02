import React, { useState } from "react";

const Tour = ({ tour, onDeleteTour }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="tour" id={tour.id}>
      <img src={tour.image} alt={tour.name} />
      <h2>{tour.name}</h2>
      <p>
        {showMore ? tour.info : `${tour.info.substring(0, 200)}...`}
        <button onClick={toggleShowMore}>
          {showMore ? "See less" : "Show more"}
        </button>
      </p>
      <p className="price">${tour.price}</p>
      <button onClick={() => onDeleteTour(tour.id)}>Delete</button>
    </div>
  );
};

export default Tour;

