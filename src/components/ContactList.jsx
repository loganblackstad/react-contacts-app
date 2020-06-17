import React, { Component } from 'react';
import './ContactList.css';
import Contact from './Contact.jsx'


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


  componentDidMount() {
    fetch('https://randomuser.me/api/?results=1')
      .then(response => response.json())
      .then(data => {
        this.setState({ contacts: data.results ? data.results : [] });
        console.log(data.results[0]);
      })
  }

  render() {
    return (
      <div className="ContactList" >
        {this.state.contacts.map((contact, index) => <Contact contact={contact} key={index} dContact={this.deleteContact.bind(this)} />)}
      </div>
    );
  }
}

