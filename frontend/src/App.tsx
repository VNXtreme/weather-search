import React, { useEffect, useState } from 'react';
import SearchInput from 'components/SearchInput';
import WeatherCard from 'components/WeatherCard';
import { locationWeatherApi } from 'api/metaWeatherApi';
import { LocationWeatherType } from 'types/MetaWeatherType';
import { AppBar, Container, Grid, Typography } from '@material-ui/core';
import Navbar from 'components/Navbar';

function App() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const onLocationSelect = async (woeid: number) => {
    try {
      setLoading(true);
      let result = await locationWeatherApi(woeid);
      setlocationWeather(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Grid container={true}>
          <Grid item={true} xs={12} md={6}>
            <SearchInput locationSelect={onLocationSelect} />
          </Grid>

          {locationWeather.consolidated_weather
            .filter((_, i) => i < 5)
            .map(
              ({ applicable_date, min_temp, max_temp, weather_state_abbr }) => (
                <WeatherCard
                  applicable_date={applicable_date}
                  weather_state_abbr={weather_state_abbr}
                  max_temp={max_temp}
                  min_temp={min_temp}
                />
              )
            )}
        </Grid>
      </Container>
    </>
  );
}

export default App;
