import { FC } from 'react';
import { Box, CircularProgress, Fade, Grid } from '@material-ui/core';
import WeatherCard from 'components/WeatherCard';
import { LocationWeatherType } from 'types/MetaWeatherType';
import useStyle from './styles';

type WeatherDashboardPropsType = {
  data: LocationWeatherType;
  isLoading: boolean;
};

const WeatherDashboard: FC<WeatherDashboardPropsType> = ({
  data,
  isLoading,
}) => {
  const classes = useStyle();
  const forecastWeather = data.consolidated_weather.slice(1);
  return (
    <>
      {isLoading && (
        <Box margin={3} textAlign="center">
          <CircularProgress />
        </Box>
      )}
      <Fade in={!isLoading}>
        <Grid container={true} spacing={2} className={classes.root}>
          {forecastWeather.map((weatherData, i) => (
            <Grid
              key={weatherData.applicable_date}
              item={true}
              xs={6}
              sm={4}
              md
            >
              <WeatherCard weatherData={weatherData} />
            </Grid>
          ))}
        </Grid>
      </Fade>
    </>
  );
};
export default WeatherDashboard;
