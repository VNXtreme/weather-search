import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import moment from 'moment';
import React, { FC } from 'react';
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
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h6">
            {moment(applicable_date).calendar()}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Max: {Math.round(max_temp)}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Min: {Math.round(min_temp)}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={`${process.env.REACT_APP_ASSET_DOMAIN}/${weather_state_abbr}.svg`}
        title={weather_state_name}
      />
    </Card>
  );
};
export default WeatherCard;
