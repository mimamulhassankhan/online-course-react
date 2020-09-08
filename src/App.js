import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import Header from './Components/Header/Header';
import CourseContainer from './Components/CourseContainer/CourseContainer';


function App() {
  return (
    <div>
      <Header/>
      <Container className="entryPoint" fluid>
        <CourseContainer/>
      </Container>
    </div>
  );
}

export default App;
