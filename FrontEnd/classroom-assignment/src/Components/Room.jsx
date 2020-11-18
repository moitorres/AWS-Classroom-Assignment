import React from "react";
import '../App.css'

class Room extends React.Component {




  render() {

    return (
      
        
        <div className="reservationsContainer">
        <h1 className="reservationTitle">Reservaciones del salón seleccionado</h1>
        <div className="reservationsListContainer">
          <table className="table table-bordered reservationsList">
          <thead>
            <tr>
              <th className="text-center" scope="col">E-mail</th>
              <th className="text-center" scope="col">Día de reservación</th>
              <th className="text-center" scope="col">Hora de comienzo</th>
              <th className="text-center" scope="col">Hora de término</th>
              <th className="text-center" scope="col">Motivo</th>
            </tr>
          </thead>
          <tbody>
            { 
                this.props.reservations.map(reservation => {
                  return (
                    <tr>
                      <td className="text-center">{ reservation.email }</td>
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
export default Room;
