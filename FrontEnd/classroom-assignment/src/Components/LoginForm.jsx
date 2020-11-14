import React, {useState, useContext} from 'react';
import {AccountContext} from './Account'
import {Form, Card, Button } from "react-bootstrap";

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {authenticate} = useContext(AccountContext);

    const onSubmit = event => {
        event.preventDefault();

        authenticate(email, password)
        .then(data =>{
            console.log("Logged in", data);
        })
        .catch(err =>{
            console.log("Failed to login", err);
        })
    };

    return(
        <Card style={{ width: '25rem', height:'18rem', padding:'10px'}}>
            <Card.Title style={{ textAlign: "center",fontFamily:"Verdana"}}>Inicio de sesión</Card.Title>
            <Form onSubmit={onSubmit} variant="border">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label >Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Ingresa tu email" 
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Ingresa tu password"
                        value={password}
                        onChange={event => setPassword(event.target.value)} 
                    />
                </Form.Group>

                <Button variant="outline-primary" type="submit">
                    Iniciar Sesión
                </Button>
            </Form>
        </Card>
    );
}