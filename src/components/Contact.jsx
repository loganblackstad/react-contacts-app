import React, { Component } from 'react';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Col, Row, Form, Container } from 'react-bootstrap'

export default class Contact extends Component {
  constructor(props) {
    super(props);

    console.log(props.contact);

    this.state = {
      hidden: true,
    }
  }

  toggle = () => {
    this.setState({ hidden: !this.state.hidden })
  }

  deleteContact = () => {
    this.props.dContact(this.props.contact.login.username);
    console.log(this.props.contact.login.username);
  }

  editContact = () => { };

  render() {

    var divStyle = {
      width: '200px',
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
          <Col xs={2} sm={2} md={2} lg={2} className="sandbox">{this.props.contact.name.first}</Col>
        </Row>
        <Row className="justify-content-md-center sandbox">
          <Col xs={2} sm={2} md={2} lg={2} className="sandbox" style={divStyle}><p>username:</p></Col>
          <Col xs={2} sm={2} md={2} lg={2} className="sandbox">{this.props.contact.login.username}</Col>
        </Row>
        <Row className="justify-content-md-center sandbox">
          <Col xs={2} sm={2} md={2} lg={2} className="sandbox" style={divStyle}><p>email:</p></Col>
          <Col xs={2} sm={2} md={2} lg={2} className="sandbox">{this.props.contact.email}</Col>
        </Row>
        <Row className="justify-content-md-center sandbox">
          <Col xs={2} sm={2} md={2} lg={2} className="sandbox" style={divStyle}><p>phone:</p></Col>
          <Col xs={2} sm={2} md={2} lg={2} className="sandbox">{this.props.contact.phone}</Col>
        </Row>
      </Container >
    )
  }

}

