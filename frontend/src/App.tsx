import { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import locationSearchApi from 'api/metaWeatherApi';
import SearchInput from 'components/Inputs/SearchInput';

function App() {
  useEffect(() => {
    let cities = locationSearchApi('london');
  }, []);

  return (
    <Container>
      <Form autoComplete="off">
        <Row md={4}>
          <Col>
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
