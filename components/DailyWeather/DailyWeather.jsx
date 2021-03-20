import React from "react";
import styles from "./DailyWeather.module.scss";
import Slider from "../Slider/Slider";

const DaiilyWeather = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Daily</h3>
      <Slider />
    </div>
  );
};

export default DaiilyWeather;
