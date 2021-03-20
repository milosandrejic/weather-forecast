import React, {useRef} from "react";
import {connect} from "react-redux";
import {
  getDailyForecast,
  getCurrentWeather,
  setActiveCardIndex,
} from "../../redux/actions/weatherActions";
import styles from "./Search.module.scss";

const Search = (props) => {
  const {getDailyForecast, getCurrentWeather, setActiveCardIndex} = props;

  const inputRef = useRef();
  const searchBtnRef = useRef();

  const getWeather = () => {
    const city = inputRef.current.value;

    getCurrentWeather(city);
    getDailyForecast(city);
    setActiveCardIndex(0);
    inputRef.current.value = "";
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        getWeather();
      }}
      className={styles.container}
    >
      <input ref={inputRef} type="text" className={styles.searchForm} placeholder="Search place" />
      <button
        onClick={() => getWeather()}
        ref={searchBtnRef}
        className={styles.searchBtn}
        type="button"
      >
        Search
      </button>
    </form>
  );
};

export default connect(null, {getDailyForecast, getCurrentWeather, setActiveCardIndex})(Search);
