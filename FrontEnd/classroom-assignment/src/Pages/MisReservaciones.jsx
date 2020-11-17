import React from "react";
import '../App.css'
import SpecificReservations from "../Components/SpecificReservations";

class MisReservaciones extends React.Component {

  render() {

    return (
      <div className="reservationsContainer">
        <h1 className="reservationTitle">Salones Reservados</h1>
        <SpecificReservations/>
      </div>
    );
  }
}
export default MisReservaciones;
