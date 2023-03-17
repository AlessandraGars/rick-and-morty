import React, { useState, useEffect } from "react";
import Location from "./components/Location";

function App() {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://rickandmortyapi.com/api/location/${Math.floor(Math.random() * 127)}`)
      .then((response) => response.json())
      .then((data) => {
        setLocation(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm !== "") {
      fetch(`https://rickandmortyapi.com/api/location/${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setLocation(data);
      })
      .catch((error) => {
        setError(error);
      });
    }
  };


  if (isLoading) {
    return <p className="Loading">Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className='App'>
      <div className="logo">
        <img src="../public/img/logo.png" alt="" />
      </div>
      <div className="search-head">
        <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Type a location id 1-126"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      </div>

      {location && (
        <Location
          name={location.name}
          type={location.type}
          dimension={location.dimension}
          residents={location.residents}
          id={location.id}
          isLoading={isLoading}
          searchTerm={searchTerm}
        />
      )}
    </div>
  );
}

export default App;
