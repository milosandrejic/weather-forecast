import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  getDailyForecast,
  getCurrentWeather,
  setActiveCardIndex,
} from '../../redux/actions/weatherActions';
import styles from './Search.module.scss';

const Search = (props) => {
  const { getDailyForecast, getCurrentWeather, setActiveCardIndex } = props;

  const inputRef = useRef();

  const getWeather = () => {
    const city = inputRef.current.value;
    getCurrentWeather(city);
    getDailyForecast(city);
    setActiveCardIndex(0);
    inputRef.current.value = '';
  };

  return (
    <div className={styles.container}>
      <input ref={inputRef} type="text" className={styles.searchForm} placeholder="Search place" />
      <button className={styles.searchBtn} type="button" onClick={() => getWeather()}>
        Search
      </button>
    </div>
  );
};

Search.propTypes = {
  getDailyForecast: PropTypes.func,
  getCurrentWeather: PropTypes.func,
  setActiveCardIndex: PropTypes.func,
};

export default connect(null, { getDailyForecast, getCurrentWeather, setActiveCardIndex })(Search);
