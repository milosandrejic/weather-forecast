import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './MoonPhase.module.scss';

const MoonPhase = (props) => {
  const { componentIndex, phaseClass, moonPhaseIndex } = props;

  return (
    <li
      className={`${styles.moonPhaseItem} ${
        moonPhaseIndex === componentIndex ? styles.moonPhaseItemActive : ``
      } ${phaseClass}`}
    />
  );
};

MoonPhase.propTypes = {
  componentIndex: PropTypes.number,
  phaseClass: PropTypes.string,
  moonPhaseIndex: PropTypes.number,
};

const mapStateToProps = (state) => ({
  moonPhaseIndex: state.weather.moonPhaseIndex,
});

export default connect(mapStateToProps)(MoonPhase);
