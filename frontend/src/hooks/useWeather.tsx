import { useSnackbar } from 'notistack';
import { locationWeatherApi } from 'api/metaWeatherApi';
import { LocationWeatherType } from 'types/MetaWeatherType';
import { useState } from 'react';

const useWeather = () => {
  const [isLoading, setLoading] = useState(false);
  const [locationWeather, setlocationWeather] = useState<LocationWeatherType>({
    consolidated_weather: [],
    time: '',
    sun_rise: '',
    sun_set: '',
    timezone_name: '',
    parent: null,
    sources: [],
    title: '',
    location_type: '',
    woeid: 0,
    latt_long: '',
    timezone: '',
  });
  const { enqueueSnackbar } = useSnackbar();
  const onLocationSelect = async (woeid: number) => {
    try {
      setLoading(true);
      let result = await locationWeatherApi(woeid);
      setlocationWeather(result);
    } catch (error) {
      enqueueSnackbar(error.response.statusText, { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return {
    isLoading,
    setLoading,
    locationWeather,
    setlocationWeather,
    onLocationSelect,
  };
};
export default useWeather;
