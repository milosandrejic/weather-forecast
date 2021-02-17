import React from 'react';
import styles from './DayDetails.module.scss';

const DayDetails = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Day Details</h3>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsCard}>
          <h4>Monrise</h4>
          <div className={styles.row}>
            <i className={`wi wi-moonrise ${styles.icon}`} />
            <span>16:58</span>
          </div>
          <h4>Moonset</h4>
          <div className={styles.row}>
            <i className={`wi wi-moonset ${styles.icon}`} />
            <span>16:58</span>
          </div>
          <ul className={styles.moonPhasesList}>
            <li className={`${styles.moonPhaseItem} wi wi-moon-new`} />
            <li
              className={`${styles.moonPhaseItem} wi wi-moon-waxing-crescent-4`}
            />
            <li
              className={`${styles.moonPhaseItem} wi wi-moon-first-quarter`}
            />
            <li
              className={`${styles.moonPhaseItem} wi wi-moon-waxing-gibbous-4`}
            />
            <li className={`${styles.moonPhaseItem} wi wi-moon-full`} />
            <li
              className={`${styles.moonPhaseItem} wi wi-moon-waning-gibbous-4`}
            />
            <li
              className={`${styles.moonPhaseItem} wi wi-moon-third-quarter`}
            />
            <li
              className={`${styles.moonPhaseItem} wi wi-moon-waning-crescent-4`}
            />
          </ul>
          <span className={styles.moonPhaseName}>Waxing Crescent</span>
        </div>
        <div className={styles.detailsCard}>
          <h4>Sunrise</h4>
          <div className={styles.row}>
            <i className={`wi wi-sunrise ${styles.icon}`} />
            <span>16:58</span>
          </div>
          <h4>Sunset</h4>
          <div className={styles.row}>
            <i className={`wi wi-sunset ${styles.icon}`} />
            <span>16:58</span>
          </div>
        </div>
        <div className={styles.detailsCard}>
          <div className={styles.row}>
            <div className={styles.circleContainer}>
              <h4 className={styles.detailName}>Precipitation</h4>
              <svg height={100} width={100} className={styles.circle}>
                <circle
                  strokeWidth={1}
                  fill="transparent"
                  r={48}
                  cx={50}
                  cy={50}
                  stroke="white"
                />
                <circle
                  className={styles.progressCircle}
                  strokeWidth={1}
                  fill="transparent"
                  r={48}
                  cx={50}
                  cy={50}
                  stroke="red"
                />
                <text textAnchor="middle" x="50%" y="50%">
                  Some text
                </text>
              </svg>
            </div>
            <div className={styles.circleContainer}>
              <h4 className={styles.detailName}>Humidity</h4>
              <svg height={100} width={100} className={styles.circle}>
                <circle
                  strokeWidth={1}
                  fill="transparent"
                  r={48}
                  cx={50}
                  cy={50}
                  stroke="white"
                />
                <circle
                  className={styles.progressCircle}
                  strokeWidth={1}
                  fill="transparent"
                  r={48}
                  cx={50}
                  cy={50}
                  stroke="red"
                />
                <text textAnchor="middle" x="50%" y="50%">
                  Some text
                </text>
              </svg>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.circleContainer}>
              <h4 className={styles.detailName}>UV Index</h4>
              <svg height={100} width={100} className={styles.circle}>
                <circle
                  strokeWidth={1}
                  fill="transparent"
                  r={48}
                  cx={50}
                  cy={50}
                  stroke="white"
                />
                <circle
                  className={styles.progressCircle}
                  strokeWidth={1}
                  fill="transparent"
                  r={48}
                  cx={50}
                  cy={50}
                  stroke="red"
                />
                <text textAnchor="middle" x="50%" y="50%">
                  Some text
                </text>
              </svg>
            </div>
            <div className={styles.circleContainer}>
              <h4 className={styles.detailName}>Wind</h4>
              <svg height={100} width={100} className={styles.circle}>
                <circle
                  strokeWidth={1}
                  fill="transparent"
                  r={48}
                  cx={50}
                  cy={50}
                  stroke="white"
                />
                <circle
                  className={styles.progressCircle}
                  strokeWidth={1}
                  fill="transparent"
                  r={48}
                  cx={50}
                  cy={50}
                  stroke="red"
                />
                <text textAnchor="middle" x="50%" y="50%">
                  Some text
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayDetails;
