import React from 'react';
import { Container, Form } from 'react-bootstrap';
import SearchInput from './components/Inputs/SearchInput';

function App() {
  return (
    <Container>
      <Form inline>
        <SearchInput />
      </Form>
    </Container>
  );
}

export default App;
