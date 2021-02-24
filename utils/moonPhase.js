export const moonPhases = {
  0: 'Full Moon',
  1: 'Wanning Gibbous Mooon',
  2: 'Last Quarter Moon',
  3: 'Wanning Crescent Moon',
  4: 'New Moon',
  5: 'Waxing Crescent Moon',
  6: 'First Quarter Moon',
  7: 'Waxing Gibbous Moon',
};

export const moonPhaseClasses = [
  'wi wi-moon-full',
  'wi wi-moon-waning-gibbous-4',
  'wi wi-moon-third-quarter',
  'wi wi-moon-waning-crescent-4',
  'wi wi-moon-new',
  'wi wi-moon-waxing-crescent-4',
  'wi wi-moon-first-quarter',
  'wi wi-moon-waxing-gibbous-4',
];

const moonPhaseRanges = {
  fullMoon: {
    rangeBottom: 0,
    rangeTop: 1,
  },
  waningGibbousMoon: {
    rangeBottom: 0.0,
    rangeTop: 0.25,
  },
  lastQuarterMoon: {
    value: 0.25,
  },
  waningCrescentMoon: {
    rangeBottom: 0.25,
    rangeTop: 0.5,
  },
  newMoon: {
    value: 0.5,
  },
  waxingCrescentMoon: {
    rangeBottom: 0.5,
    rangeTop: 0.75,
  },
  firstQuarterMoon: {
    value: 0.75,
  },
  waxingGibbousMoon: {
    rangeBottom: 0.75,
    rangeTop: 1,
  },
};

const getMoonPhaseName = (phase) => {
  return parseMoonPhase(phase);
};

const parseMoonPhase = (phase) => {
  if (
    phase === moonPhaseRanges.fullMoon.rangeBottom ||
    phase === moonPhaseRanges.fullMoon.rangeTop
  )
    return 0;

  if (
    phase > moonPhaseRanges.waningGibbousMoon.rangeBottom &&
    phase < moonPhaseRanges.waningGibbousMoon.rangeTop
  )
    return 1;

  if (phase === moonPhaseRanges.lastQuarterMoon.value) return 2;
  if (
    phase > moonPhaseRanges.waningCrescentMoon.rangeBottom &&
    phase < moonPhaseRanges.waningCrescentMoon.rangeTop
  )
    return 3;
  if (phase === moonPhaseRanges.newMoon.value) return 4;
  if (
    phase > moonPhaseRanges.waxingCrescentMoon.rangeBottom &&
    phase < moonPhaseRanges.waxingCrescentMoon.rangeTop
  )
    return 5;
  if (phase === moonPhaseRanges.firstQuarterMoon.value) return 6;
  if (
    phase > moonPhaseRanges.waxingGibbousMoon.rangeBottom &&
    phase < moonPhaseRanges.waxingGibbousMoon.rangeTop
  )
    return 7;
  return undefined;
};

export default getMoonPhaseName;
