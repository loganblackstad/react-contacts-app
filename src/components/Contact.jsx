import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: '../logo.svg',
      name: 'Hooman',
      phone: '1234',
      email: 'hooman@dog.com',
    }
  }

  editContact = () => { };


  render() {
    return (
      <div>
        <Button type="button">Delete</Button>
        <Button type="button" onClick={this.editContact}>Edit</Button>
      </div>
    )
  }

}

