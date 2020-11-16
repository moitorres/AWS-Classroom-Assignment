import React, {Component} from 'react';
import {Form, Card, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import axios from 'axios';

import "react-datepicker/dist/react-datepicker.css";

class ReserveForm extends Component {

    constructor(props) {
        super();

        //State to save the values of the form
        this.state = {
            email: '',
            name:'',
            dateTime: ''
        };
    }

    //'On change' for the name and the email
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    //On change for the dateTime
    onChangeDate = dateTime => this.setState({ dateTime });

    //When the user presses the submit button
    onSubmit = event => {

        event.preventDefault();

        //Get data from the state
        const { email, name, dateTime } = this.state;
        console.log("Submit. Email: ", email,", Name: ", name,", Date-Time: ", dateTime);

        /*
        axios.post('/', { email, name, date }).then((result) => {
            
            alert("Reservación hecha exitosamente");
        }).
        catch(error =>{
            console.log(error);
            alert("Error en reservación");
            return error;
        });  
        */
        
    }


    render(){
        const { email, name, dateTime } = this.state;

        return(
            <Card style={{ width: '50rem', height:'22rem', padding:'10px', display:"block", margin:"auto"}}>
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
                    
                    <Form.Group>
                        <Form.Label >Fecha y hora de la reservación</Form.Label>
                        <br/>
                        <DatePicker
                            selected={dateTime}
                            dateFormat="dd/MM/yyyy , h:mm aa"
                            onChange={this.onChangeDate}
                            showTimeSelect
                        >
                        <div style={{ color: "red" }}>No te olvides de seleccionar la hora</div>
                        </DatePicker>
                    </Form.Group>

                    <Button variant="outline-primary" type="submit" style={{ display:"block", margin:"auto"}}>
                        Reservar Salón
                    </Button>
                </Form>
            </Card>
        )
    }
}

export default ReserveForm;