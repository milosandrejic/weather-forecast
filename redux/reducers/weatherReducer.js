import * as actionTypes from '../actionTypes/weatherActionTypes';
import getMoonPhaseName from '../../utils/moonPhase';

const initialState = {
  currentWeather: {},
  dailyForecast: [],
  dayDetails: {},
  moonPhaseIndex: 0,
  activeCardIndex: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.payload,
      };
    case actionTypes.GET_16_DAY_FORECAST:
      return {
        ...state,
        dailyForecast: action.payload,
      };
    case actionTypes.GET_DAY_DETAILS:
      return {
        ...state,
        dayDetails: state.dailyForecast[state.activeCardIndex],
      };
    case actionTypes.SET_ACTIVE_CARD_INDEX:
      return {
        ...state,
        activeCardIndex: action.payload,
      };
    case actionTypes.SET_MOON_PHASE_INDEX:
      return {
        ...state,
        moonPhaseIndex: getMoonPhaseName(state.dayDetails.moon_phase),
      };
    default:
      return state;
  }
}
