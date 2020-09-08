import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap'
import Header from './Components/Header/Header';


function App() {
  return (
    <Container fluid>
      <Header/>
      <Row >
        <Header/>
      </Row>
    </Container>
  );
}

export default App;
