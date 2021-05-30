import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { render, fireEvent } from '@testing-library/react';

const mockEnqueueSnackbar = jest.fn();
const mockCloseSnackbar = jest.fn();

jest.mock('notistack', () => {
  const actual = jest.requireActual('notistack');

  return {
    ...actual,
    useSnackbar: () => ({
      enqueueSnackbar: mockEnqueueSnackbar,
      closeSnackbar: mockCloseSnackbar,
    }),
  };
});

const handleOnsearch = jest.fn();
const handleOnchange = jest.fn();
const locations = [
  {
    title: 'Ho Chi Minh City',
    location_type: 'string',
    woeid: 1,
    latt_long: 'string',
  },
  {
    title: 'Ha Noi',
    location_type: 'string',
    woeid: 2,
    latt_long: 'string',
  },
];
const setup = () => {
  const autocomplete = render(
    <Autocomplete
      id="location-search-box"
      data-testid="location-search-testid"
      options={locations}
      getOptionLabel={(option) => option.title}
      autoHighlight={true}
      onChange={handleOnchange}
      renderInput={(params) => (
        <TextField
          {...params}
          name="search-location"
          label="Location search"
          variant="standard"
          autoComplete="off"
          onChange={handleOnsearch}
          placeholder="Enter your location..."
        />
      )}
    />
  );
  let input = autocomplete.getByPlaceholderText(
    'Enter your location...'
  ) as HTMLInputElement;
  return {
    input,
    ...autocomplete,
  };
};

describe('<SearchInput />', () => {
  it('renders SearchInput', () => {
    let { container } = setup();
    expect(container).toBeVisible();
  });

  it('allow letters to be inputted', () => {
    let { input } = setup();
    fireEvent.change(input, { target: { value: 'Ho c' } });
    expect(input.value).toBe('Ho c');
    expect(handleOnsearch).toHaveBeenCalledTimes(1);
    input.focus();
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(handleOnchange).toHaveBeenCalledTimes(1);
  });
});
