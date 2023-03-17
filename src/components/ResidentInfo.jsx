import React, { useState, useEffect } from "react";

function ResidentInfo({ url }) {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setResident(data))
      .catch((error) => console.log(error));
  }, []);

  if (!resident) {
    return <div>Cargando residente...</div>;
  }

  return (

    <div className="card">
        <div className="circle-img">
          <img src={resident.image} alt={resident.name} />
        </div>
        <h2 className="title">{resident.name}</h2>
        <div className="card-info">
          <div className="text-box">
          <p className="text"> <span>RAZA:</span> {resident.species}</p>
            <p className="text"><span>STATUS:</span> {resident.status}</p>
            <p className="text"><span>ORIGEN:</span> {resident.origin.name}</p>
            <p className="text"><span>APARICIONES:</span> {resident.episode.length}</p>
          </div>
        </div>
    </div>
  
  );
}

export default ResidentInfo;
