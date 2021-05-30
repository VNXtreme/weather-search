import React, { FC } from 'react';
import { ConsolidatedWeather } from 'types/MetaWeatherType';

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
  return (
    <dl className="gradient-pink rounded p-3">
      <dt>{dayLabel}</dt>
      <dd>Max: {Math.round(max_temp)}</dd>
      <dd>Min: {Math.round(min_temp)}</dd>
      <dd>
        <img
          src={`${process.env.REACT_APP_ASSET_DOMAIN}/${weather_state_abbr}.svg`}
          alt=""
          height="40"
        />
      </dd>
    </dl>
  );
};
export default WeatherCard;
