import React from "react";
import '../App.css'
import ReserverForm from '../Components/ReserveForm'
import axios from 'axios';

class Reservar extends React.Component {

  constructor(){
    super();
    this.state = {
      rooms: []
    };
  }

  async componentDidMount(){
    
    //Set all the products from the user's cart
    await this.fetchRooms().then((data)=>
    {

      const rooms = this.state.rooms.slice();
      
      if(data !=null){
        for (const room of data)
        {
          rooms.push(room);
        }
      }
      this.setState({rooms});
    });

  }

  async fetchRooms(){
    let rooms = axios.get('https://ahutrv2eeh.execute-api.us-east-2.amazonaws.com/APP/rooms').then((response) => {
      return response.data;
    }).
    catch(error =>{
        console.log(error);
        alert("Error en reservación");
        return error;
    });  

    return await rooms;
  }

  render() {

    return (
      <div>
        <br/>
        <h1 style={{ textAlign: "center",fontFamily:"Verdana"}}>Reservar un salón</h1>
        <br/>
        <ReserverForm rooms={this.state.rooms}/>
      </div>
    );
  }
}
export default Reservar;
