import { useState } from 'react';
import { ILocation } from '../types/MetaWeatherType';
import { useSnackbar } from 'notistack';
import { locationSearchApi } from 'api/metaWeatherApi';

type UseSearchLocationPropsType = {
  locationSelect: (woeid: number) => void;
};

const useSearchLocation = ({ locationSelect }: UseSearchLocationPropsType) => {
  const [isLoading, setIsLoading] = useState(false);
  const [locations, setLocations] = useState<ILocation[]>([]);
  const { enqueueSnackbar } = useSnackbar();

  const handleOnsearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let text = e.target.value;
    if (!text) return;
    try {
      setIsLoading(true);
      const result = await locationSearchApi(text);
      setLocations(result);
    } catch (error) {
      const errorMsg = error.response.data;
      enqueueSnackbar(
        <span dangerouslySetInnerHTML={{ __html: errorMsg }}></span>,
        { variant: 'error' }
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnchange = (
    e: React.ChangeEvent<{}>,
    value: ILocation | null
  ) => {
    if (value) locationSelect(value.woeid);
  };

  return {
    isLoading,
    locations,
    handleOnsearch,
    handleOnchange,
  };
};
export default useSearchLocation;
