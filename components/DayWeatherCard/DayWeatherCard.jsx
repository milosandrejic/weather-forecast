import React, {useRef, useEffect} from "react";
import {connect} from "react-redux";
import getWeatherIcon from "../../utils/weatherIcons";
import dateParser, {parseDateOptions} from "../../utils/dateParser";
import {setActiveCardIndex} from "../../redux/actions/weatherActions";

import styles from "./DayWeatherCard.module.scss";

const DayWeatherCard = (props) => {
  const {
    isClicked,
    slideWidth,
    resetClickHandler,
    weatherData,
    cardIndex,
    setActiveCardIndex: onWeatherCardClick,
    activeCardIndex,
  } = props;

  const {
    max_temp: maxTemp,
    low_temp: minTemp,
  } = weatherData;
  const {icon, description} = weatherData.weather;

  let {valid_date: validDate} = weatherData;

  validDate = dateParser(validDate, parseDateOptions.GET_SHORT_DAY_AND_DATE);

  const dayCard = useRef();

  const handleIndicatorClick = () => {
    dayCard.current.style.transform = `translateX(-${slideWidth}px`;
    dayCard.current.style.transition = "transform 2s";
    resetClickHandler();
  };

  useEffect(() => {
    if (isClicked) handleIndicatorClick();
  }, [isClicked]);

  return (
    <div>
      <div
        className={`${styles.card} ${cardIndex === activeCardIndex ? styles.cardActive : null}`}
        ref={dayCard}
        onClick={() => onWeatherCardClick(cardIndex)}
        onKeyUp={(e) => {
          if (e.code === "Enter") {
            onWeatherCardClick(cardIndex);
          }
        }}
        role="button"
        tabIndex={-1}
      >
        <h4 className={styles.dayName}>{validDate}</h4>
        <img className={styles.weatherIcon} src={`${getWeatherIcon(icon)}`} alt="weather icon" />
        <p className={styles.tempMax}>
          {Math.round(maxTemp)}
          &deg;
          <span className={styles.tempMin}>
            {Math.round(minTemp)}
            &deg;
          </span>
        </p>
        <span className={styles.weatherDesc}>{description}</span>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  activeCardIndex: state.weather.activeCardIndex,
});

export default connect(mapStateToProps, {setActiveCardIndex})(DayWeatherCard);
