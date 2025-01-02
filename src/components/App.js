import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.example.com/tours") 
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleDeleteTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <main id="main">
      {loading ? (
        <Loading />
      ) : tours.length === 0 ? (
        <div>
          <p>No tours left!</p>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
      ) : (
        <Tours tours={tours} onDeleteTour={handleDeleteTour} />
      )}
    </main>
  );
};

export default App;
