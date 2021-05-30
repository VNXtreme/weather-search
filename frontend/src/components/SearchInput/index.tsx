import React, { useState } from 'react';
import { Form, FormControl, InputGroup, ListGroup } from 'react-bootstrap';
import SearchIcon from '../Icons/SearchIcon';
import { locationSearchApi, locationWeatherApi } from 'api/metaWeatherApi';
import { LocationType } from 'types/MetaWeatherType';
import { Typeahead } from 'react-bootstrap-typeahead';
import { debounce } from 'utils/helper';
import './style.scss';

const SearchInput: React.FC<{
  locationSelect: (woeid: number) => void;
}> = ({ locationSelect }) => {
  const [locations, setLocations] = useState<LocationType[]>([]);

  const handleOnsearch = debounce(async (text: string, event: Event) => {
    if (!text) return;
    const result = await locationSearchApi(text);
    setLocations(result);
  }, 300);

  const handleOnselect = (woeid: number) => {
    locationSelect(woeid);
  };

  return (
    <div className="search">
      <Form.Label htmlFor="location" srOnly>
        Location
      </Form.Label>
      <InputGroup className="">
        <InputGroup.Prepend>
          <InputGroup.Text>
            <SearchIcon />
          </InputGroup.Text>
        </InputGroup.Prepend>

        <Typeahead
          id="location"
          labelKey="title"
          size="lg"
          onInputChange={handleOnsearch}
          onChange={(selected: LocationType[]) => {
            console.log('selected', selected);
            if (selected.length) {
              handleOnselect(selected[0].woeid);
            }
          }}
          options={locations}
          paginationText="Load more"
          placeholder="Enter your location..."
        />
      </InputGroup>
    </div>
  );
};
export default SearchInput;
