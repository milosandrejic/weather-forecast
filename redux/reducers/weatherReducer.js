import * as actionTypes from '../actionTypes/weatherActionTypes';

const initialState = {
  currentWeather: {},
  dailyForecast: [],
  dayDetails: {},
  moonPhase: {},
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
    default:
      return state;
  }
}
