import { createContext, useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import SearchInput from 'components/SearchInput';
import WeatherCard from 'components/WeatherCard';
import { locationWeatherApi } from 'api/metaWeatherApi';
import { LocationWeatherType } from 'types/MetaWeatherType';

const AppContext = createContext({});

function App() {
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
    let result = await locationWeatherApi(woeid);
    setlocationWeather(result);
  };

  return (
    <Container className="py-5">
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <SearchInput locationSelect={onLocationSelect} />
          </Col>
        </Row>

        <Row className="flex-wrap flex-md-nowrap mt-5">
          {locationWeather.consolidated_weather
            .filter((_, i) => i < 5)
            .map(
              ({ applicable_date, min_temp, max_temp, weather_state_abbr }) => (
                <Col xs={12} md>
                  <WeatherCard
                    applicable_date={applicable_date}
                    weather_state_abbr={weather_state_abbr}
                    max_temp={max_temp}
                    min_temp={min_temp}
                  />
                </Col>
              )
            )}
        </Row>
      </Form>
    </Container>
  );
}

export default App;
