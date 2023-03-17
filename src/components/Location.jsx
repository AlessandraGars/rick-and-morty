import ResidentList from "./ResidentList";

function Location({ name, type, id, dimension, residents }) { 

  return (
    <div className="location-container">
      <div className="location-info">
      <p><span>NOMBRE:</span> {name}</p>
      <p><span>TIPO:</span> {type}</p>
      <p><span>ID:</span> {id}</p>
      <p><span>DIMENSIÓN:</span> {dimension}</p>
      <p><span>POBLACIÓN:</span> {residents?.length}</p>
      </div>
      <ResidentList residentList={residents} />
    </div>
  );
}

export default Location;
