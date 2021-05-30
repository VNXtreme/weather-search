import { cleanup, render } from '@testing-library/react';
import WeatherCard from './WeatherCard';

const props = {
  weatherData: {
    id: 6542010249904128,
    weather_state_name: 'Heavy Cloud',
    weather_state_abbr: 'hc',
    wind_direction_compass: 'SE',
    created: '2021-05-30T13:06:01.707328Z',
    applicable_date: '2021-05-30',
    min_temp: 11.989999999999998,
    max_temp: 22.314999999999998,
    the_temp: 20.72,
    wind_speed: 7.5897791098597525,
    wind_direction: 136.71876808675276,
    air_pressure: 1020.5,
    humidity: 73,
    visibility: 13.504881492086216,
    predictability: 71,
  },
};

describe('<WeatherCard />', () => {
  let { weatherData } = props;

  it('renders min temp', () => {
    let minText = `Min: ${Math.round(weatherData.min_temp)}°C`;
    let { getByText } = render(<WeatherCard {...props} />);
    getByText(minText);
  });

  it('renders max temp', () => {
    let maxText = `Max: ${Math.round(weatherData.max_temp)}°C`;
    let { getByText } = render(<WeatherCard {...props} />);
    getByText(maxText);
  });
});
