import React from "react";
import { Link } from "react-router-dom";
import "./VehicleView.css";

function VehiclesView({ vehicle }) {
  return (
    <div className={VehiclesView}>
      <Link to="/">
        <button>Volver</button>
      </Link>
      <h1> {vehicle.name} </h1>
      <h2> {vehicle.description} </h2>
      <img src={vehicle.image} alt={vehicle.name + " image"} width = {1400} height={600} />
    </div>
  );
}

export default VehiclesView;
