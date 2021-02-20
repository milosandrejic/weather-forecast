import * as actionTypes from '../actionTypes/weatherActionTypes';

const initialState = {
  currentWeather: {},
  dailyForecast: [],
  dayDetails: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.payload,
      };
    case actionTypes.GET_16DAY_WEATHER:
      return {
        ...state,
        dailyForecast: action.payload,
      };
    case actionTypes.GET_DAY_DETAILS:
      return {
        ...state,
        dayDetails: action.payload,
      };
    default:
      return state;
  }
};
