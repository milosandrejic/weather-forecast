import React from 'react';
import styles from './MoonPhaseList.module.scss';
import { moonPhaseClasses } from '../../utils/moonPhase';
import MoonPhase from '../MoonPhase/MoonPhase';

const MoonPhaseList = () => {
  return (
    <ul className={styles.moonPhasesList}>
      {moonPhaseClasses.map((phaseClass, index) => (
        <MoonPhase phaseClass={phaseClass} componentIndex={index} />
      ))}
    </ul>
  );
};

export default MoonPhaseList;
