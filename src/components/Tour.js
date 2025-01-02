import React, { useState } from "react";

const Tour = ({ tour, onDeleteTour }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="tour" id={`tour-${tour.id}`}>
      <img src={tour.image} alt={tour.name} />
      <h2>{tour.name}</h2>
      <p id={`tour-item-para-${tour.id}`}>
        {showMore ? tour.info : `${tour.info.substring(0, 200)}...`}
        <button
          id={`see-more-${tour.id}`}  
          onClick={toggleShowMore}
        >
          {showMore ? "See less" : "Show more"}
        </button>
      </p>
      <p className="price">${tour.price}</p>
      <button
        id={`delete-btn-${tour.id}`}
        onClick={() => onDeleteTour(tour.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Tour;
