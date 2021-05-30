import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { ConsolidatedWeather } from 'types/MetaWeatherType';
import useStyle from './styles';

const dayofWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

type WeatherCardPropType = Pick<
  ConsolidatedWeather,
  'applicable_date' | 'max_temp' | 'min_temp' | 'weather_state_abbr'
>;

const WeatherCard: FC<WeatherCardPropType> = ({
  applicable_date,
  max_temp,
  min_temp,
  weather_state_abbr,
}) => {
  const dayLabel = dayofWeek[new Date(applicable_date).getDay()];
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h6">{dayLabel}</Typography>
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
        title="Live from space album cover"
      />
    </Card>
  );
};
export default WeatherCard;
