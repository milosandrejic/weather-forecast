import React from "react";
import {connect} from "react-redux";
import {wrapper} from "../redux/store";
import Main from "../components/Main/Main";
import {
  getCurrentWeather,
  getDailyForecast,
  setActiveCardIndex,
} from "../redux/actions/weatherActions";

const Home = () => {
  return <Main />;
};

export const getStaticProps = wrapper.getStaticProps(async ({store}) => {
  await store.dispatch(getCurrentWeather("Belgrade"));
  await store.dispatch(getDailyForecast("Belgrade"));
  store.dispatch(setActiveCardIndex(0));
});

export default connect(null, {
  getCurrentWeather,
  getDailyForecast,
  setActiveCardIndex,
})(Home);
