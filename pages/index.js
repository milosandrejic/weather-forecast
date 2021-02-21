import React from 'react';
import { connect } from 'react-redux';
import { wrapper } from '../redux/store';
import Main from '../components/Main/Main';
import {
  getCurrentWeather,
  getDailyForecast,
} from '../redux/actions/weatherActions';

function Home() {
  return <Main />;
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  await store.dispatch(getCurrentWeather('Belgrade'));
  await store.dispatch(getDailyForecast('Belgrade'));
});

export default connect(null, { getCurrentWeather, getDailyForecast })(Home);
