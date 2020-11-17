import React from "react";
import '../App.css'

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
        <div className="reservationsListContainer">
          <table className="table table-bordered reservationsList">
          <thead>
            <tr>
              <th className="text-center" scope="col">Salón</th>
              <th className="text-center" scope="col">Día de reservación</th>
              <th className="text-center" scope="col">Hora de comienzo</th>
              <th className="text-center" scope="col">Hora de término</th>
              <th className="text-center" scope="col">Motivo</th>
            </tr>
          </thead>
          <tbody>
            { 
                this.state.reservations.map(reservation => {
                  return (
                    <tr>
                      <td className="text-center">{ reservation.name }</td>
                      <td className="text-center">{ reservation.date }</td>
                      <td className="text-center">{ reservation.startHour }</td>
                      <td className="text-center">{ reservation.endHour }</td>
                      <td className="text-center">{ reservation.motive }</td>
                      {/* <button onClick={() => {console.log('hola')}}>Delete Ninja</button> */}
                    </tr>
                  )
                })
            }
          </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Home;
