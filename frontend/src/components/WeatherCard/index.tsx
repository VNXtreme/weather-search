import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import moment from 'moment';
import { FC } from 'react';
import { IConsolidatedWeather } from 'types/MetaWeatherType';
import useStyle from './styles';

type WeatherCardPropsType = {
  weatherData: IConsolidatedWeather;
};

const WeatherCard: FC<WeatherCardPropsType> = ({ weatherData }) => {
  const classes = useStyle();
  const {
    applicable_date,
    max_temp,
    min_temp,
    weather_state_abbr,
    weather_state_name,
  } = weatherData;

  return (
    <Card>
      <Grid container={true}>
        <Grid item={true} xs={8}>
          <CardContent>
            <Typography color="primary" variant="subtitle1">
              {moment(applicable_date).calendar()}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Max: {Math.round(max_temp)}°C
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Min: {Math.round(min_temp)}°C
            </Typography>
          </CardContent>
        </Grid>
        <Grid className={classes.media} item={true} xs={4}>
          <img
            src={`${process.env.REACT_APP_ASSET_DOMAIN}/${weather_state_abbr}.svg`}
            alt={weather_state_name}
          />
          <small>{weather_state_name}</small>
        </Grid>
      </Grid>
    </Card>
  );
};
export default WeatherCard;
