import React from "react";
import '../App.css'
import axios from 'axios'

class AllReservations extends React.Component {

  state = {
    reservations: [
    ]
  }

    componentDidMount() {
        this.getNotes();
    }

  async getNotes() {
    const res = await axios.get('https://ahutrv2eeh.execute-api.us-east-2.amazonaws.com/APP/reservations');

    this.setState({reservations: res.data});
  }   

  render() {

    return (
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
                      <td className="text-center">{ reservation.room.name }</td>
                      <td className="text-center">{ reservation.date }</td>
                      <td className="text-center">{ reservation.startHour }</td>
                      <td className="text-center">{ reservation.endHour }</td>
                      <td className="text-center">{ reservation.motive }</td>
                    </tr>
                  )
                })
            }
          </tbody>
          </table>
        </div>
    );
  }
}
export default AllReservations;
