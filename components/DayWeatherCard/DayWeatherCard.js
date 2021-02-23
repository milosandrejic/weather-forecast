import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getWeatherIcon from '../../utils/weatherIcons';
import dateParser, { parseDateOptions } from '../../utils/dateParser';
import { setActiveCardIndex } from '../../redux/actions/weatherActions';

import styles from './DayWeatherCard.module.scss';

const DayWeatherCard = (props) => {
  const {
    clicked,
    slideWidth,
    resetClickHandler,
    weatherData,
    cardIndex,
    setActiveCardIndex,
    activeCardIndex,
  } = props;

  const { max_temp, low_temp } = weatherData;
  const { icon, description } = weatherData.weather;
  let { valid_date } = weatherData;

  valid_date = dateParser(valid_date, parseDateOptions.GET_SHORT_DAY_AND_DATE);

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
    <div>
      <div
        className={`${styles.card} ${
          cardIndex === activeCardIndex ? styles.cardActive : null
        }`}
        ref={dayCard}
        onClick={() => setActiveCardIndex(cardIndex)}
      >
        <h4 className={styles.dayName}>{valid_date}</h4>
        <img
          className={styles.weatherIcon}
          src={`${getWeatherIcon(icon)}`}
          alt="weather icon"
        />
        <p className={styles.tempMax}>
          {Math.round(max_temp)}&deg;
          <span className={styles.tempMin}>{Math.round(low_temp)}&deg;</span>
        </p>
        <span className={styles.weatherDesc}>{description}</span>
      </div>
    </div>
  );
};

DayWeatherCard.propTypes = {
  clicked: PropTypes.bool,
  slideWidth: PropTypes.number,
  resetClickHandler: PropTypes.func,
  weatherData: PropTypes.object,
  cardIndex: PropTypes.number,
  setActiveCardIndex: PropTypes.func,
  activeCardIndex: PropTypes.number,
};

const mapStateToProps = (state) => ({
  activeCardIndex: state.weather.activeCardIndex,
});

export default connect(mapStateToProps, { setActiveCardIndex })(DayWeatherCard);
