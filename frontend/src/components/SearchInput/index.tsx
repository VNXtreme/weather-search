import React, { useState } from 'react';
import { locationSearchApi } from 'api/metaWeatherApi';
import { LocationType } from 'types/MetaWeatherType';
import { debounce } from 'utils/helper';
import { Autocomplete } from '@material-ui/lab';
import { CircularProgress, FormControl, TextField } from '@material-ui/core';
import { useSnackbar } from 'notistack';

const SearchInput: React.FC<{
  locationSelect: (woeid: number) => void;
}> = ({ locationSelect }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [locations, setLocations] = useState<LocationType[]>([]);

  const { enqueueSnackbar } = useSnackbar();
  const handleOnsearch = debounce(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      let text = e.target.value;
      if (!text) return;
      try {
        setIsLoading(true);
        const result = await locationSearchApi(text);
        setLocations(result);
      } catch (error) {
        const errorMsg = error.response.data;
        enqueueSnackbar(
          <span dangerouslySetInnerHTML={{ __html: errorMsg }}></span>,
          { variant: 'error' }
        );
      } finally {
        setIsLoading(false);
      }
    },
    500
  );

  const handleOnchange = (
    e: React.ChangeEvent<{}>,
    value: LocationType | null
  ) => {
    if (value) locationSelect(value.woeid);
  };

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
