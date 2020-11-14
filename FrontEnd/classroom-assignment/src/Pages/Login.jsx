import React from "react";
import '../App.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginForm from '../Components/LoginForm'

import Teclogo from '../img/tec.png';

class Login extends React.Component {

  render() {

    return (
      <div>
        <br/>
        <Row>
            
          <h1 style={{ textAlign:"center", fontFamily:"Verdana",margin:"auto", marginTop:"1rem"}}>Aplicación para la administración de salones</h1>
        </Row>
        <Row>
            <Col xl={1} lg={1} md={1} sm={12} xs={12} style={{ margin: "auto", marginTop:"7rem"}}>
                <LoginForm/>
            </Col>
            <Col xl={5} lg={5} md={5} sm={12} xs={12} style={{ margin: "auto", marginTop:"4rem"}}>
                    <img src={Teclogo} style={{ width:"400px", height:"400px"}}/>
                
            </Col>
        </Row>
      </div>
    );
  }
}
export default Login;
