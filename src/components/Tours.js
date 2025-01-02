import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, onDeleteTour }) => {
  return (
    <div id="tours-list">
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} onDeleteTour={onDeleteTour} />
      ))}
    </div>
  );
};

export default Tours;
