import React, { Component } from 'react';
import './App.css';
import ContactList from './components/ContactList';
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
        <ContactList />
      </div>
    );
  }
}

export default App;
