import SearchInput from 'components/SearchInput';
import { Container, Grid } from '@material-ui/core';
import Navbar from 'components/Navbar';
import useStyle from 'style';
import WeatherDashboard from 'components/WeatherDashboard';
import useWeather from 'hooks/useWeather';

function App() {
  const classes = useStyle();
  const { isLoading, locationWeather, onLocationSelect } = useWeather();

  return (
    <>
      <Navbar />
      <Container className={classes.root}>
        <Grid container={true}>
          <Grid item={true} xs={12} md={6}>
            <SearchInput locationSelect={onLocationSelect} />
          </Grid>
        </Grid>

        <WeatherDashboard
          isLoading={isLoading}
          data={locationWeather.consolidated_weather}
        />
      </Container>
    </>
  );
}

export default App;
