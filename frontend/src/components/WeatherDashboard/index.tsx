import { FC } from 'react';
import {
  Box,
  CircularProgress,
  Fade,
  Grid,
  Typography,
} from '@material-ui/core';
import WeatherCard from 'components/WeatherCard';
import { IConsolidatedWeather } from 'types/MetaWeatherType';
import useStyle from './styles';
import WeatherToday from 'components/WeatherToday';

type WeatherDashboardPropsType = {
  data: IConsolidatedWeather[];
  isLoading: boolean;
};

const WeatherDashboard: FC<WeatherDashboardPropsType> = ({
  data,
  isLoading,
}) => {
  const classes = useStyle();
  const todayWeather = data[0];
  const forecastWeather = data.slice(1);
  return (
    <Box marginTop={4}>
      {isLoading && (
        <Box margin={3} textAlign="center">
          <CircularProgress />
        </Box>
      )}
      {todayWeather && (
        <Fade in={!isLoading}>
          <Grid container={true} justify="flex-end" className={classes.root}>
            <Grid item={true}>
              <WeatherToday weatherData={todayWeather} />
            </Grid>
          </Grid>
        </Fade>
      )}
      {forecastWeather.length > 0 && (
        <Fade in={!isLoading}>
          <Grid container={true} spacing={2}>
            <>
              <Grid item xs={12}>
                <Typography variant="h6">5-day forecast:</Typography>
              </Grid>

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
            </>
          </Grid>
        </Fade>
      )}
    </Box>
  );
};
export default WeatherDashboard;
