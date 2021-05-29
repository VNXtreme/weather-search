import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import SearchIcon from '../Icons/SearchIcon';

export default function SearchInput() {
  return (
    <>
      <Form.Label htmlFor="location" srOnly>
        Location
      </Form.Label>
      <InputGroup className="">
        <InputGroup.Prepend>
          <InputGroup.Text>
            <SearchIcon />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl id="location" placeholder="Enter your location..." />
      </InputGroup>
    </>
  );
}
