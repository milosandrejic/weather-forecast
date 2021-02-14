import React from 'react';
import Header from '../Header/Header';
import PlaceHeading from '../PlaceHeading/PlaceHeading';
import Slider from '../Slider/Slider';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <PlaceHeading />
      <Slider />
    </div>
  );
};

export default Main;
