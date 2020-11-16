import React from "react";
import '../App.css'
import ReserverForm from '../Components/ReserveForm'

class Reservar extends React.Component {

  render() {

    return (
      <div>
        <br/>
        <h1 style={{ textAlign: "center",fontFamily:"Verdana"}}>Reservar un salón</h1>
        <br/>
        <ReserverForm/>
      </div>
    );
  }
}
export default Reservar;
