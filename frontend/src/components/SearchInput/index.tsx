import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { FormControl, TextField } from '@material-ui/core';
import useSearchLocation from 'hooks/useSearchLocation';

const SearchInput: React.FC<{
  locationSelect: (woeid: number) => void;
}> = ({ locationSelect }) => {
  const { isLoading, locations, handleOnsearch, handleOnchange } =
    useSearchLocation({ locationSelect });

  return (
    <FormControl fullWidth={true}>
      <Autocomplete
        id="location-search-box"
        options={locations}
        getOptionLabel={(option) => option.title}
        autoHighlight={true}
        onChange={handleOnchange}
        loading={isLoading}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Location search"
            variant="standard"
            autoComplete="off"
            onChange={handleOnsearch}
            placeholder="Enter your location..."
          />
        )}
      />
    </FormControl>
  );
};
export default SearchInput;
