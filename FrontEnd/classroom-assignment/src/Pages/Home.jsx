import React from "react";
import '../App.css'
import SpecificReservations from "../Components/SpecificReservations";

class Home extends React.Component {

  state = {
    reservations: [
      { name: 'Salon 1', date: '15-11-2020', startHour: '13:00', endHour: '14:00', motive: 'Asesoría' },
      { name: 'Salon 2', date: '16-11-2020', startHour: '16:00', endHour: '17:30', motive: 'Laboratorio' },
      { name: 'Salon 3', date: '17-11-2020', startHour: '10:00', endHour: '12:00', motive: 'Asesoría' },
      { name: 'Salon 4', date: '18-11-2020', startHour: '15:00', endHour: '16:00', motive: 'Sesión Extra' },
    ]
  }

  render() {

    return (
      <div className="reservationsContainer">
        <h1 className="reservationTitle">Salones Reservados</h1>
        <SpecificReservations />
      </div>
    );
  }
}
export default Home;
