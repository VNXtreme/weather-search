import { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import { IConsolidatedWeather } from 'types/MetaWeatherType';

type WeatherTodayPropsType = {
  weatherData: IConsolidatedWeather;
};

const WeatherToday: FC<WeatherTodayPropsType> = ({ weatherData }) => {
  return (
    <>
      <Typography variant="h5">
        Today: {Math.round(weatherData.the_temp)}°C
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop={1}
      >
        <img
          src={`${process.env.REACT_APP_ASSET_DOMAIN}/${weatherData.weather_state_abbr}.svg`}
          alt={weatherData.weather_state_name}
          height="40"
        />
        <Typography variant="caption">
          {weatherData.weather_state_name}
        </Typography>
      </Box>
    </>
  );
};
export default WeatherToday;
