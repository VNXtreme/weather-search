import { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import SearchInput from 'components/SearchInput';

function App() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Row>
          <Col md={4}>
            <SearchInput />
          </Col>
        </Row>
        <Row>
          <Col>
            <div>Monday</div>
            <div>Min</div>
            <div>Max</div>
          </Col>
          <Col>2</Col>
          <Col>3</Col>
          <Col>4</Col>
          <Col>5</Col>
        </Row>
      </Form>
    </Container>
  );
}

export default App;
