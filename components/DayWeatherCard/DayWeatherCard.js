import React from 'react';
import styles from './DayWeatherCard.module.scss';

const DayWeatherCard = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.card}>
        <h4 className={styles.dayName}>Sat 13</h4>
        <img
          className={styles.weatherIcon}
          src="./weather-icons/angry_clouds.svg"
          alt="weather icon"
        />
        <p className={styles.tempMax}>
          - 4 <span className={styles.tempMin}>- 9</span>
        </p>
        <span className={styles.weatherDesc}>Cloudy</span>
      </div>
    </div>
  );
};

export default DayWeatherCard;
