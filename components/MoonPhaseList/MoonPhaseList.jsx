import React from "react";
import {v4} from "uuid";
import styles from "./MoonPhaseList.module.scss";
import {moonPhaseClasses} from "../../utils/moonPhase";
import MoonPhase from "../MoonPhase/MoonPhase";

const MoonPhaseList = () => {
  return (
    <ul className={styles.moonPhasesList}>
      {moonPhaseClasses.map((phaseClass, index) => (
        <MoonPhase phaseClass={phaseClass} componentIndex={index} key={v4()} />
      ))}
    </ul>
  );
};

export default MoonPhaseList;
