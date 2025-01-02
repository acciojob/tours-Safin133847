import React, { useState, useEffect } from "react";
import 'regenerator-runtime/runtime';
import Tours from "./Tours";
import Loading from "./Loading";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const toursData = [
        {
          id: "rec6d6T3q5EBIdCfD",
          name: "Best of Paris in 7 Days Tour",
          info: "Paris is synonymous with the finest things...",
          image: "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
          price: "1,995"
        },
      ];
      setTours(toursData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleDeleteTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <main id="main">
      {loading ? (
        <Loading />
      ) : tours.length === 0 ? (
        <div>No tours left</div>
      ) : (
        <Tours tours={tours} onDeleteTour={handleDeleteTour} />
      )}
    </main>
  );
};

export default App;
