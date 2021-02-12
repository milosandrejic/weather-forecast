import React from 'react';
import Header from '../Header/Header';
import PlaceHeading from '../PlaceHeading/PlaceHeading';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <PlaceHeading />
    </div>
  );
};

export default Main;
