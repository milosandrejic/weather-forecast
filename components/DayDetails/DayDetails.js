import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MoonPhaseList from '../MoonPhaseList/MoonPhaseList';
import dateParser, { parseDateOptions } from '../../utils/dateParser';
import styles from './DayDetails.module.scss';
import { moonPhases } from '../../utils/moonPhase';
import {
  calculateCircumference,
  calculateProgress,
  calculateUvIndex,
  calculateWindDirection,
} from '../../utils/progressCircle';

const DayDetails = (props) => {
  const { weatherDetails, moonPhaseIndex } = props;

  const precipitationProgressRef = useRef();
  const humidityProgressRef = useRef();
  const windDirectionRef = useRef();
  const uvIndexRef = useRef();

  let { moonrise_ts, moonset_ts, sunrise_ts, sunset_ts } = weatherDetails;
  const { rh: humidity, precip, uv, wind_spd, wind_dir } = weatherDetails;
  const r = 55;
  const circumference = calculateCircumference(r);
  const windIndicatorWidth = 30;

  useEffect(() => {
    precipitationProgressRef.current.style.strokeDasharray = `${circumference} ${circumference}`;
    precipitationProgressRef.current.style.strokeDashoffset = `${calculateProgress(
      circumference,
      precip
    )}`;

    humidityProgressRef.current.style.strokeDasharray = `${circumference} ${circumference}`;
    humidityProgressRef.current.style.strokeDashoffset = `${calculateProgress(
      circumference,
      humidity
    )}`;

    uvIndexRef.current.style.strokeDasharray = `${circumference} ${circumference}`;
    uvIndexRef.current.style.strokeDashoffset = `${calculateUvIndex(circumference, uv)}`;
  }, [precipitationProgressRef, humidityProgressRef, uvIndexRef, precip, humidity, uv]);

  useEffect(() => {
    windDirectionRef.current.style.strokeDasharray = `${windIndicatorWidth} ${circumference}`;
    windDirectionRef.current.style.transform = `rotate(${calculateWindDirection(wind_dir)}deg)`;
  }, [windDirectionRef, wind_dir]);

  moonrise_ts = dateParser(moonrise_ts * 1000, parseDateOptions.GET_TIME);
  moonset_ts = dateParser(moonset_ts * 1000, parseDateOptions.GET_TIME);
  sunrise_ts = dateParser(sunrise_ts * 1000, parseDateOptions.GET_TIME);
  sunset_ts = dateParser(sunset_ts * 1000, parseDateOptions.GET_TIME);

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Day Details</h3>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsCard}>
          <h4>Monrise</h4>
          <div className={styles.row}>
            <i className={`wi wi-moonrise ${styles.icon}`} />
            <span>{moonrise_ts}</span>
          </div>
          <h4>Moonset</h4>
          <div className={styles.row}>
            <i className={`wi wi-moonset ${styles.icon}`} />
            <span>{moonset_ts}</span>
          </div>
          <MoonPhaseList />
          <span className={styles.moonPhaseName}>{moonPhases[moonPhaseIndex]}</span>
        </div>
        <div className={styles.detailsCard}>
          <h4>Sunrise</h4>
          <div className={styles.row}>
            <i className={`wi wi-sunrise ${styles.icon}`} />
            <span>{sunrise_ts}</span>
          </div>
          <h4>Sunset</h4>
          <div className={styles.row}>
            <i className={`wi wi-sunset ${styles.icon}`} />
            <span>{sunset_ts}</span>
          </div>
        </div>
        <div className={styles.detailsCard}>
          <div className={styles.row}>
            <div className={styles.circleContainer}>
              <h4 className={styles.detailName}>Precipitation</h4>
              <svg height={140} width={140} className={styles.circle}>
                <circle
                  className={` ${styles.progressCircle} ${styles.progressCircleBack}`}
                  r={r}
                  cx={70}
                  cy={70}
                />
                <circle
                  ref={precipitationProgressRef}
                  className={` ${styles.progressCircle} ${styles.progressCircleFront}`}
                  r={r}
                  cx={70}
                  cy={70}
                />
                <text textAnchor="middle" x="50%" y="50%" className={styles.progressCircleText}>
                  {Math.round(precip)}%
                </text>
              </svg>
            </div>
            <div className={styles.circleContainer}>
              <h4 className={styles.detailName}>Humidity</h4>
              <svg height={140} width={140} className={styles.circle}>
                <circle
                  className={` ${styles.progressCircle} ${styles.progressCircleBack}`}
                  r={r}
                  cx={70}
                  cy={70}
                />
                <circle
                  ref={humidityProgressRef}
                  className={` ${styles.progressCircle} ${styles.progressCircleFront}`}
                  r={r}
                  cx={70}
                  cy={70}
                />
                <text textAnchor="middle" x="50%" y="50%" className={styles.progressCircleText}>
                  {Math.round(humidity)}%
                </text>
              </svg>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.circleContainer}>
              <h4 className={styles.detailName}>UV Index</h4>
              <svg height={140} width={140} className={styles.circle}>
                <circle
                  className={` ${styles.progressCircle} ${styles.progressCircleBack}`}
                  r={r}
                  cx={70}
                  cy={70}
                />
                <circle
                  ref={uvIndexRef}
                  className={` ${styles.progressCircle} ${styles.progressCircleFront}`}
                  r={r}
                  cx={70}
                  cy={70}
                />
                <text textAnchor="middle" x="50%" y="50%" className={styles.progressCircleText}>
                  {uv.toFixed(1)}
                </text>
              </svg>
            </div>
            <div className={styles.circleContainer}>
              <h4 className={styles.detailName}>Wind</h4>
              <div className={styles.worldSidesContainer}>
                <span className={`${styles.worldSide} ${styles.worldSideNorth}`}>N</span>
                <span className={`${styles.worldSide} ${styles.worldSideEast}`}>E</span>
                <span className={`${styles.worldSide} ${styles.worldSideWest}`}>W</span>
                <span className={`${styles.worldSide} ${styles.worldSideSouth}`}>S</span>
                <svg height={140} width={140} className={styles.circle}>
                  <circle
                    className={` ${styles.progressCircle} ${styles.progressCircleBack}`}
                    r={r}
                    cx={70}
                    cy={70}
                  />
                  <circle
                    ref={windDirectionRef}
                    className={` ${styles.progressCircle} ${styles.windDirCircleFront}`}
                    r={r}
                    cx={70}
                    cy={70}
                  />
                  <text textAnchor="middle" x="50%" y="50%" className={styles.progressCircleText}>
                    {Math.round(wind_spd)}
                    &nbsp;
                    <tspan style={{ fontSize: '1.4rem' }}>km/h</tspan>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  weatherDetails: state.weather.dayDetails,
  moonPhaseIndex: state.weather.moonPhaseIndex,
});

DayDetails.propTypes = {
  weatherDetails: PropTypes.object,
  moonPhaseIndex: PropTypes.number,
};

export default connect(mapStateToProps)(DayDetails);
