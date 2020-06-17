import React, { Component } from 'react';
import './ContactList.css';
import Contact from './Contact.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Col, Row, Form, Container } from 'react-bootstrap'


export default class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
    }
  }

  deleteContact = (userName) => {
    const updatedContactList = this.state.contacts.filter((contact) => { return contact.login.username !== userName });
    this.setState({ contacts: updatedContactList })
  }

  generateContact = () => {
    fetch('https://randomuser.me/api/?results=1')
      .then(response => response.json())
      .then(data => {
        const newContacts = [...this.state.contacts, data.results[0]];
        this.setState({ contacts: newContacts });
        // console.log(data.results[0]);
      })
  }

  savetoLocalStorage

  componentDidMount() {
    this.generateContact();

  }

  render() {
    return (
      <>
        <Button type="button" onClick={this.generateContact}>Generate User</Button>
        <div className="ContactList" >
          {this.state.contacts.map((contact, index) => <Contact contact={contact} key={index} dContact={this.deleteContact.bind(this)} />)}
        </div>
      </>
    );
  }
}

