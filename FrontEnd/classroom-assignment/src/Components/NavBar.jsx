import React, {useContext} from "react";
import { Navbar, Nav, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {AccountContext} from "./Account"

import "../App.css"

export default () => {

    const LogoutButton = () => {
        const {logout} = useContext(AccountContext);
        return(
            <Button variant="outline-light" onClick={logout}>Logout</Button>
        )
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="NavBar-Style" variant="dark">
          <Navbar.Brand className="NavBar-Title" href="/">ITESM</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/reservar">Reservar Salón</Nav.Link>
              <Nav.Link href="/misReservaciones">Ver mis reservaciones</Nav.Link>
            </Nav>
            <LogoutButton/>
          </Navbar.Collapse>
        </Navbar>
      );
}


 

  /*
    Additional nav links for other pages:
    <Nav.Link href="/home">Home</Nav.Link>
    <Nav.Link href="/user">User</Nav.Link>
  */

  /*
    Form for search bar:

    <Form inline>
      <FormControl
        type="text"
        onChange={this.searchItem}
        placeholder="Search"
        className="mr-sm-2"
      />
      <Button variant="outline-info">Search</Button>
      
    </Form>
  */

  
  


