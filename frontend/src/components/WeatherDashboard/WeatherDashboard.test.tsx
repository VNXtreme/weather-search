import { render } from '@testing-library/react';
import WeatherDashboard from './WeatherDashboard';

const props = {
  isLoading: false,
  data: [
    {
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
    {
      id: 5328713630613504,
      weather_state_name: 'Heavy Rain',
      weather_state_abbr: 'hr',
      wind_direction_compass: 'SE',
      created: '2021-05-30T13:06:05.239923Z',
      applicable_date: '2021-05-31',
      min_temp: 14.629999999999999,
      max_temp: 19.28,
      the_temp: 17.675,
      wind_speed: 8.945616440205201,
      wind_direction: 145.3409647978124,
      air_pressure: 1019,
      humidity: 91,
      visibility: 6.1080788196929925,
      predictability: 77,
    },
    {
      id: 6611020140249088,
      weather_state_name: 'Heavy Rain',
      weather_state_abbr: 'hr',
      wind_direction_compass: 'ENE',
      created: '2021-05-30T13:06:07.855578Z',
      applicable_date: '2021-06-01',
      min_temp: 15.745000000000001,
      max_temp: 21.15,
      the_temp: 20.475,
      wind_speed: 6.697881783488428,
      wind_direction: 61,
      air_pressure: 1018,
      humidity: 83,
      visibility: 9.478085480792174,
      predictability: 77,
    },
    {
      id: 6424387570892800,
      weather_state_name: 'Heavy Cloud',
      weather_state_abbr: 'hc',
      wind_direction_compass: 'NNE',
      created: '2021-05-30T13:06:10.769697Z',
      applicable_date: '2021-06-02',
      min_temp: 15.17,
      max_temp: 25.965,
      the_temp: 23.630000000000003,
      wind_speed: 3.714601127111005,
      wind_direction: 23.69404789875546,
      air_pressure: 1015.5,
      humidity: 70,
      visibility: 12.584320070786607,
      predictability: 71,
    },
    {
      id: 5659086004682752,
      weather_state_name: 'Showers',
      weather_state_abbr: 's',
      wind_direction_compass: 'SE',
      created: '2021-05-30T13:06:13.660284Z',
      applicable_date: '2021-06-03',
      min_temp: 16.845,
      max_temp: 26.155,
      the_temp: 24.625,
      wind_speed: 5.391480472459503,
      wind_direction: 133.42729771463186,
      air_pressure: 1014,
      humidity: 75,
      visibility: 13.181768472122803,
      predictability: 73,
    },
    {
      id: 4915276622594048,
      weather_state_name: 'Showers',
      weather_state_abbr: 's',
      wind_direction_compass: 'SSE',
      created: '2021-05-30T13:06:17.364958Z',
      applicable_date: '2021-06-04',
      min_temp: 18.84,
      max_temp: 27.564999999999998,
      the_temp: 28.19,
      wind_speed: 5.892121609798775,
      wind_direction: 168.5,
      air_pressure: 1014,
      humidity: 75,
      visibility: 9.914598743338901,
      predictability: 73,
    },
  ],
};

describe('<WeatherDashboard />', () => {
  it('renders weatherToday and weatherCards', () => {
    const { getByTestId } = render(<WeatherDashboard {...props} />);
    expect(getByTestId('forecastWeather')).toBeVisible();
    expect(getByTestId('todayWeather')).toBeVisible();
  });

  it('renders loading spinner', () => {
    const { getByTestId } = render(
      <WeatherDashboard {...props} isLoading={true} />
    );
    expect(getByTestId('loadingSpinner')).toBeVisible();
  });
});
