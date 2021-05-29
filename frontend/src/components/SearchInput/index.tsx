import React, { useState } from 'react';
import { Form, FormControl, InputGroup, ListGroup } from 'react-bootstrap';
import SearchIcon from '../Icons/SearchIcon';
import { locationSearchApi, locationWeatherApi } from 'api/metaWeatherApi';
import { LocationType } from 'types/MetaWeatherType';
import { debounce } from 'utils/helper';

export default function SearchInput() {
  const [locations, setLocations] = useState<LocationType[]>([]);

  const handleOnsearch = debounce(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputVal = e.target.value;
      const result = await locationSearchApi(inputVal);
      setLocations(result);
    },
    500
  );

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
        <FormControl
          onChange={handleOnsearch}
          id="location"
          placeholder="Enter your location..."
        />
      </InputGroup>
      <ListGroup>
        {locations.length > 0 ? (
          locations.map((loca) => <ListGroup.Item>{loca.title}</ListGroup.Item>)
        ) : (
          <ListGroup.Item>No match</ListGroup.Item>
        )}
      </ListGroup>
    </>
  );
}
