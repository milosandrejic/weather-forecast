import React, { useRef, useEffect } from 'react';
import propTypes from 'prop-types';

import styles from './DayWeatherCard.module.scss';

const DayWeatherCard = (props) => {
  const { clicked, slideWidth, resetClickHandler } = props;

  const dayCard = useRef();

  const handleIndicatorClick = () => {
    dayCard.current.style.transform = `translateX(-${slideWidth}px`;
    dayCard.current.style.transition = 'all 2s';
    resetClickHandler();
  };

  useEffect(() => {
    if (clicked) handleIndicatorClick();
  }, [clicked]);

  return (
    <div className={styles.slider} ref={dayCard}>
      <div className={styles.card}>
        <h4 className={styles.dayName}>Sat 13</h4>
        <img
          className={styles.weatherIcon}
          src="./weather-icons/01d.svg"
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

DayWeatherCard.propTypes = {
  clicked: propTypes.bool,
  slideWidth: propTypes.number,
  resetClickHandler: propTypes.func,
};

export default DayWeatherCard;
