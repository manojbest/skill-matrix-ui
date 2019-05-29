import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">
        <Container>
          <Row>
              <Col md={3}>Wiley</Col>
              <Col md={5}>Skill Matrix</Col>
              <Col md={2}>C</Col>
          </Row>
          <Row>
              <Col>D</Col>
              <Col>E</Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
