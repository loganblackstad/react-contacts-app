import React, { Component } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Col, Row, Form, } from 'react-bootstrap'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      editMe: [],
    }
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1>Contacts App</h1>
        </header>
        <ContactForm onSubmit={this.onNewContact} updateContact={this.state.editMe} />
        <ContactList />
      </div>
    );
  }
}

export default App;
