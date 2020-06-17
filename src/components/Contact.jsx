import React, { Component } from 'react';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Col, Row, Form, Container } from 'react-bootstrap'

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      image: '../logo.svg',
      name: 'Hooman',
      username: props.contact.login.username,
      phone: props.contact.phone,
      email: 'hooman@dog.com',
      address: '',
      city: '',
      state: '',
      zip: '',
    }
  }

  toggle = () => {
    this.setState({ hidden: !this.state.hidden })
  }

  deleteContact = () => {
    this.props.dContact(this.state.username);
    console.log(this.state.username);
  }

  editContact = () => { };




  render() {

    var divStyle = {
      width: '100px',
      marginLeft: '5px',
      border: '1px solid darkblue',
    };


    var boxy = {
      border: '1px solid darkblue',
      textAlign: 'left',
      borderRadius: '3px',
      width: '50px',
    };


    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="b-btn sandbox">
              <Button type="button" style={divStyle} onClick={this.deleteContact}>Delete</Button>
              <Button type="button" style={divStyle} onClick={this.editContact}>Edit</Button>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center sandbox">
          <Col xs={2} sm={2} md={2} lg={2} className="sandbox" style={divStyle}><p>name:</p></Col>
          <Col xs={2} sm={2} md={2} lg={2} className="sandbox">{this.state.name}</Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col style={boxy} xs lg="2"><p>email:</p></Col>
          <Col style={boxy} md="auto">{this.state.email}</Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col style={boxy} xs lg="2"><p>phone:</p></Col>
          <Col style={boxy} xs lg="1">{this.state.phone}</Col>
        </Row>
        <Row className="flex">
          <Col style={boxy} xs={12} md={8}>xs=12 md=8</Col>
          <Col style={boxy} xs={6} md={4}>xs=6 md=4</Col>
        </Row>
        <Row>
          <Col style={boxy} md={4}>md=4</Col>
          <Col style={boxy} md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
        </Row>
      </Container >
    )
  }

}

