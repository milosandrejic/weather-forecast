import * as actionTypes from '../actionTypes/weatherActionTypes';

const initialState = {
  currentWeather: {},
  dailyForecast: [],
  dayDetails: {},
  moonPhase: {},
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
        dayDetails: state.dailyForecast[action.payload],
      };
    default:
      return state;
  }
}
