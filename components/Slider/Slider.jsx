import React, {useRef, useState, useEffect} from "react";
import {connect} from "react-redux";
import DayWeatherCard from "../DayWeatherCard/DayWeatherCard";
import styles from "./Slider.module.scss";
import indicatorType from "../../utils/slideIndicatorTypes";

const Slider = (props) => {
  const {forecast} = props;

  const sliderStart = useRef();
  const sliderEnd = useRef();
  const sliderViewportStart = useRef();
  const sliderViewportEnd = useRef();
  const sliderWidth = useRef();

  const [slideWidth, setSlideWidth] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [indicatorOption, setIndicatorOption] = useState();
  const [sliderInnerWidth, setSliderInnerWidth] = useState();
  const [prevCalculatedWidth, setPrevCalculatedWidth] = useState(0);

  useEffect(() => {
    setSliderInnerWidth(sliderWidth.current.clientWidth);
  }, [slideWidth]);

  const calculateSlideWidth = (type) => {
    let calculatedWidth = prevCalculatedWidth;

    if (type === indicatorType.RIGHT) {
      calculatedWidth = sliderEnd.current.getBoundingClientRect().left
        - sliderViewportEnd.current.getBoundingClientRect().left;
      if (calculatedWidth > sliderInnerWidth) {
        calculatedWidth = sliderInnerWidth;
      }
      calculatedWidth += prevCalculatedWidth;
      setPrevCalculatedWidth(calculatedWidth);
    } else {
      calculatedWidth = prevCalculatedWidth >= sliderInnerWidth ? prevCalculatedWidth - sliderInnerWidth : 0;
      setPrevCalculatedWidth(calculatedWidth);
    }

    return calculatedWidth;
  };

  const translateSliderEnd = (translateWidth) => {
    sliderEnd.current.style.transform = `translateX(-${translateWidth}px)`;
  };

  const translateSliderStart = (translateWidth) => {
    sliderStart.current.style.transform = `translateX(-${translateWidth}px)`;
  };

  const handleIndicatorClick = (type) => {
    const translateWidth = calculateSlideWidth(type);

    setClicked(true);
    setSlideWidth(translateWidth);
    translateSliderStart(translateWidth);
    translateSliderEnd(translateWidth);
    if (type === indicatorType.RIGHT) {
      setIndicatorOption(indicatorType.RIGHT);
    } else {
      setIndicatorOption(indicatorType.LEFT);
    }
  };

  const resetClickHandler = () => {
    setClicked(false);
  };

  return (
    <div className={styles.slider}>
      <span
        className={`${styles.indicatorLeft} ${styles.indicator}`}
        onClick={() => handleIndicatorClick(indicatorType.LEFT)}
        role="button"
        tabIndex="-1"
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleIndicatorClick(indicatorType.LEFT);
          }
        }}
      >
        &lt;
      </span>
      <span ref={sliderViewportStart} />
      <div className={styles.sliderCardArea} ref={sliderWidth}>
        <span ref={sliderStart} />
        {forecast.map((forecastDay, index) => (
          <DayWeatherCard
            key={forecastDay.ts}
            slideWidth={slideWidth}
            clicked={clicked}
            indicatorOption={indicatorOption}
            resetClickHandler={resetClickHandler}
            sliderInnerWidth={sliderInnerWidth}
            weatherData={forecastDay}
            cardIndex={index}
          />
        ))}
        <span ref={sliderEnd} />
      </div>
      <span ref={sliderViewportEnd} />
      <span
        onClick={() => handleIndicatorClick(indicatorType.RIGHT)}
        role="button"
        tabIndex={0}
        className={`${styles.indicatorRight} ${styles.indicator}`}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleIndicatorClick(indicatorType.RIGHT);
          }
        }}
      >
        &gt;
      </span>
    </div>
  );
};

const mapStateToProps = state => ({
  forecast: state.weather.dailyForecast,
});

export default connect(mapStateToProps)(Slider);
