import React, {Component} from 'react';
import {Form, Card, Button } from "react-bootstrap";
import axios from 'axios';
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

import Room from './Room';

class ReserveForm extends Component {

    constructor(props) {
        super(props);

        //State to save the values of the form
        this.state = {
            
            email: '',
            name:'',
            salon:'',
            motivo:'',
            date: new Date('2020-11-18'),
            startTime: new Date('2020-11-18'),
            endTime: new Date('2020-11-18'),
            roomId:'',
            roomInfo:[],
        };
        
        this.updateRoom = this.updateRoom.bind(this)
    }
    
    //Generic 'On change'
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onChangeDate = date => this.setState({ date });

    onChangeStartTime = startTime => this.setState({ startTime });

    onChangeEndTime = endTime => this.setState({ endTime });
    
    onChangeRoomId = roomId => this.setState({roomId});

    //When the user presses the submit button
    onSubmit = event => {

        event.preventDefault();
        
        //Get data from the state
        const { email, date, startTime, endTime, roomId, motivo } = this.state;

        //Get user id from the local storage
        let personId = localStorage.getItem('user');

        let parsedDate = "";
        let parsedStartTime = "";
        let parsedEndTime = "";

        //The program checks if the object is already a "Date" object, if it isn't it transforms it to a date object
        if(date instanceof Date){
            //Parse the date to only send the day, month and year
            parsedDate = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
        }
        else{
            //Parse the date to only send the day, month and year
            parsedDate = date.toDate().getDate() + "-" + (date.toDate().getMonth()+1) + "-" + date.toDate().getFullYear();
        }
       
        console.log(parsedDate);

        if(startTime instanceof Date){
            //Parse the time to only send the hours and minutes. If the minutes are less than 10, it adds a '0' at the beginning, so the minutes are always two digits
            parsedStartTime = startTime.getHours() + ":" +  ((startTime.getMinutes()<10?'0':'') + startTime.getMinutes());
        }
        else{
            //Parse the time to only send the hours and minutes. If the minutes are less than 10, it adds a '0' at the beginning, so the minutes are always two digits
            parsedStartTime = startTime.toDate().getHours() + ":" +  ((startTime.toDate().getMinutes()<10?'0':'') + startTime.toDate().getMinutes());
        }

        if(endTime instanceof Date){
            //Parse the time to only send the hours and minutes. If the minutes are less than 10, it adds a '0' at the beginning, so the minutes are always two digits
            parsedEndTime = endTime.getHours() + ":" +  ((endTime.getMinutes()<10?'0':'') + endTime.getMinutes());
        }
        else{
            //Parse the time to only send the hours and minutes. If the minutes are less than 10, it adds a '0' at the beginning, so the minutes are always two digits
            parsedEndTime = endTime.toDate().getHours() + ":" +  ((endTime.toDate().getMinutes()<10?'0':'') + endTime.toDate().getMinutes());
        }

        //Post to the database
        axios.post('https://ahutrv2eeh.execute-api.us-east-2.amazonaws.com/APP/reservations', { 
            date: parsedDate, endHour:parsedEndTime, motive: motivo, person: personId, room: roomId, startHour: parsedStartTime, email: email
        }).then((result) => {
            alert("Reservación hecha exitosamente");
            window.location.href = "/misReservaciones";
        }).catch(error =>{
            console.log(error);
            alert("Error en reservación");
            return error;
        });  
        
    }

    //Function to fetch all the reservations from a specific room
    async updateRoom(){
        let url = 'https://ahutrv2eeh.execute-api.us-east-2.amazonaws.com/APP/reservations?room=' + this.state.roomId;

        let roomInfo = await axios.get(url).then((response) => {
            console.log(response.data);
            return response.data;
          }).catch(error =>{
              console.log(error);
              alert("Error en reservación");
              return error;
          });  
      
          this.setState({roomInfo});
    }

    render(){
        const { email, name, date, startTime, endTime, motivo } = this.state;

        return(
            <div>
                <Card style={{ width: '50rem', height:'32rem', padding:'10px', display:"block", margin:"auto"}}>
                    <Form variant="border" onSubmit={this.onSubmit}>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label >Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Ingresa tu email" 
                                name="email"
                                value={email}
                                onChange={this.onChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicText">
                            <Form.Label >Nombre Completo</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Ingresa tu nombre" 
                                name="name"
                                value={name}
                                onChange={this.onChange}
                            />
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicText">
                            <Form.Label >Motivo</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Ingresa el motivo de reservación" 
                                name="motivo"
                                value={motivo}
                                onChange={this.onChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label >Salón</Form.Label>
                            <Form.Control 
                                as="select" 
                                name="salon"
                                value={this.state.salon}
                                onChange={ (e) =>{
                                    this.onChange(e);
                                    this.onChangeRoomId(e.target.value);
                                    setTimeout(this.updateRoom, 200);
                                }}
                            >
                                <option></option>
                                { 
                                    this.props.rooms.map(room => {
                                        return ( 
                                            <option key={room.id} value={room.id}>
                                            {room.name}
                                            </option>
                                        )
                                    })
                                }
                            </Form.Control>
                        </Form.Group>


                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                margin="normal"
                                id="date-picker-inline"
                                label="Fecha de reservación"
                                value={date}
                                onChange={this.onChangeDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />            
                        </MuiPickersUtilsProvider>


                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                label="Hora de inicio"
                                value={startTime}
                                onChange={this.onChangeStartTime}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        

                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                label="Hora de fin"
                                value={endTime}
                                onChange={this.onChangeEndTime}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        
                        <Button variant="outline-primary" type="submit" style={{ display:"block", margin:"auto"}}>
                            Reservar Salón
                        </Button>
                    </Form>
                </Card>

                <br/>
                {this.state.salon !== '' ? (<Room reservations={this.state.roomInfo}/>) : (<br/>)}

            </div>
        )
    }
    //
}

export default ReserveForm;