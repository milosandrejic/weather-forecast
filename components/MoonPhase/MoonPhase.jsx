import React from "react";
import {connect} from "react-redux";
import styles from "./MoonPhase.module.scss";

const MoonPhase = (props) => {
  const {componentIndex, phaseClass, moonPhaseIndex, key} = props;

  return (
    <li
      key={key}
      className={`${styles.moonPhaseItem} ${
        moonPhaseIndex === componentIndex ? styles.moonPhaseItemActive : ``
      } ${phaseClass}`}
    />
  );
};

const mapStateToProps = state => ({
  moonPhaseIndex: state.weather.moonPhaseIndex,
});

export default connect(mapStateToProps)(MoonPhase);
