import React from "react";
import '../App.css'
import AllReservations from "../Components/AllReservations";

class Home extends React.Component {

  render() {

    return (
      <div className="reservationsContainer">
        <h1 className="reservationTitle">Todas las reservaciones</h1>
        <AllReservations />
      </div>
    );
  }
}
export default Home;
