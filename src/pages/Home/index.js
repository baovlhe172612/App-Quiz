import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <Container fluid className="bg-light py-5">
      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <h1 className="display-4">Welcome to the Quiz!</h1>
          <p className="lead">Test your knowledge with fun and challenging questions.</p>
          
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={4} className="mb-3 d-flex">
          <Card className="flex-fill">
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body className="d-flex flex-column">
              <div className="flex-grow-1">
                <Card.Title>Quiz Category 1</Card.Title>
                <Card.Text>
                  Take on questions from various topics and improve your knowledge.
                </Card.Text>
              </div>
              <Button variant="success" className="mt-auto">Start Category</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3 d-flex">
          <Card className="flex-fill">
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body className="d-flex flex-column">
              <div className="flex-grow-1">
                <Card.Title>Quiz Category 2</Card.Title>
                <Card.Text>
                  Explore new challenges and test your skills in this category.
                </Card.Text>
              </div>
              <Button variant="success" className="mt-auto">Start Category</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3 d-flex">
          <Card className="flex-fill">
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body className="d-flex flex-column">
              <div className="flex-grow-1">
                <Card.Title>Quiz Category 3</Card.Title>
                <Card.Text>
                  Discover interesting trivia and put your knowledge to the test.
                </Card.Text>
              </div>
              <Button variant="success" className="mt-auto">Start Category</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
