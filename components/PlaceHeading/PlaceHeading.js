import React from 'react';
import styles from './PlaceHeading.module.scss';

const PlaceHeading = () => {
  return (
    <div className={styles.placeHeading}>
      <h3 className={styles.title}>Belgrade</h3>
      <div className={styles.weatherInfoBox}>
        <img
          className={styles.weatherIcon}
          src="./weather-icons/night_full_moon_rain_thunder.svg"
          alt="weather icon"
        />
        <p className={styles.temp}>-3</p>
        <ul className={styles.tempOptions}>
          <li className={`${styles.tempOption} ${styles.tempOptionActive}`}>
            C
          </li>
          <li className={styles.tempOption}>F</li>
        </ul>
      </div>
      <p className={styles.weatherDescription}>Cloudy</p>
      <div className={styles.weatherDetailsBox}>
        <div className={styles.weatherDetailsRow}>
          <p className={styles.weatherDetail}>Feels like: 20</p>
          <p className={styles.weatherDetail}>
            Wind 4.1
            <i className={`${styles.windIcon} wi wi-wind towards-23-deg`} />
            Speed: 2km/h
          </p>
          <p className={styles.weatherDetail}>Visibility 4km</p>
        </div>
        <div className={styles.weatherDetailsRow}>
          <div className={styles.weatherDetail}>Barometer: 1024mb</div>
          <div className={styles.weatherDetail}>Hummidity: 20%</div>
        </div>
      </div>
    </div>
  );
};

export default PlaceHeading;
