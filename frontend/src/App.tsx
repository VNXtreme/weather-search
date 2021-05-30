import { useState } from 'react';
import SearchInput from 'components/SearchInput';
import { locationWeatherApi } from 'api/metaWeatherApi';
import { LocationWeatherType } from 'types/MetaWeatherType';
import { Container, Grid } from '@material-ui/core';
import Navbar from 'components/Navbar';
import useStyle from 'style';
import WeatherDashboard from 'components/WeatherDashboard';
import { useSnackbar } from 'notistack';

function App() {
  const classes = useStyle();
  const [isLoading, setLoading] = useState(false);
  const [locationWeather, setlocationWeather] = useState<LocationWeatherType>({
    consolidated_weather: [],
    time: '',
    sun_rise: '',
    sun_set: '',
    timezone_name: '',
    parent: null,
    sources: [],
    title: '',
    location_type: '',
    woeid: 0,
    latt_long: '',
    timezone: '',
  });
  const { enqueueSnackbar } = useSnackbar();

  const onLocationSelect = async (woeid: number) => {
    try {
      setLoading(true);
      let result = await locationWeatherApi(woeid);
      setlocationWeather(result);
    } catch (error) {
      enqueueSnackbar(error.response.statusText, { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Container className={classes.root}>
        <Grid container={true}>
          <Grid item={true} xs={12} md={6}>
            <SearchInput locationSelect={onLocationSelect} />
          </Grid>
        </Grid>

        <WeatherDashboard
          isLoading={isLoading}
          data={locationWeather.consolidated_weather}
        />
      </Container>
    </>
  );
}

export default App;
