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
          {forecastWeather.map(
            ({ applicable_date, min_temp, max_temp, weather_state_abbr }) => (
              <Grid key={applicable_date} item={true} xs={6} md>
                <WeatherCard
                  applicable_date={applicable_date}
                  weather_state_abbr={weather_state_abbr}
                  max_temp={max_temp}
                  min_temp={min_temp}
                />
              </Grid>
            )
          )}
        </Grid>
      </Fade>
    </>
  );
};
export default WeatherDashboard;
