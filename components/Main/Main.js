import React from 'react';
import Header from '../Header/Header';
import PlaceHeading from '../PlaceHeading/PlaceHeading';
import styles from './Main.module.scss';
import DailyWeather from '../DailyWeather/DailyWeather';
import DayDetails from '../DayDetails/DayDetails';

const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <PlaceHeading />
      <DailyWeather />
      <DayDetails />
    </div>
  );
};

export default Main;
