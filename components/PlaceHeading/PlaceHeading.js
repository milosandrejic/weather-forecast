import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './PlaceHeading.module.scss';
import getWeatherIcon from '../../utils/weatherIcons';

const PlaceHeading = (props) => {
  const { weather } = props;
  const {
    city_name,
    temp,
    app_temp: feelsLike,
    wind_spd,
    wind_dir,
    pres,
    vis,
    rh: humidity,
  } = weather;
  const { icon, description } = weather.weather;

  return (
    <div className={styles.placeHeading}>
      <h3 className={styles.title}>{city_name}</h3>
      <div className={styles.weatherInfoBox}>
        <img className={styles.weatherIcon} src={`${getWeatherIcon(icon)}`} alt="weather icon" />
        <p className={styles.temp}>{Math.round(temp)}</p>
        <ul className={styles.tempOptions}>
          <li className={`${styles.tempOption} ${styles.tempOptionActive}`}>C</li>
          <li className={styles.tempOption}>F</li>
        </ul>
      </div>
      <p className={styles.weatherDescription}>{description}</p>
      <div className={styles.weatherDetailsBox}>
        <div className={styles.weatherDetailsRow}>
          <p className={styles.weatherDetail}>
            Feels like: {Math.round(feelsLike) === 0 ? 0 : Math.round(feelsLike)}&deg;
          </p>
          <p className={styles.weatherDetail}>
            Wind
            <i className={`${styles.windIcon} wi wi-wind towards-${wind_dir}-deg`} />
            Speed: {Math.round(wind_spd)}km/h
          </p>
          <p className={styles.weatherDetail}>Visibility {Math.round(vis)}km</p>
        </div>
        <div className={styles.weatherDetailsRow}>
          <div className={styles.weatherDetail}>Barometer: {Math.round(pres)}mb</div>
          <div className={styles.weatherDetail}>Hummidity: {Math.round(humidity)}%</div>
        </div>
      </div>
    </div>
  );
};

PlaceHeading.propTypes = {
  weather: PropTypes.object,
};

const mapStateToProps = (state) => ({
  weather: state.weather.currentWeather,
});

export default connect(mapStateToProps)(PlaceHeading);
