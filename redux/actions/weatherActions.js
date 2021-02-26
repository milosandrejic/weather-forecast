import axios from 'axios';
import apiRequestGenerator from '../../utils/apiRequestGenerator';
import apiRequestTypes from '../../utils/apiRequestTypes';
import * as weatherActionTypes from '../actionTypes/weatherActionTypes';
import dispatchAction from '../dipatchAction';

export const getCurrentWeather = (city) => async (dispatch) => {
  const url = apiRequestGenerator(city, apiRequestTypes.currentWeather);
  const response = await axios.get(url);
  dispatchAction(weatherActionTypes.GET_CURRENT_WEATHER, ...response.data.data, dispatch);
};

export const getDailyForecast = (city) => async (dispatch) => {
  const url = apiRequestGenerator(city, apiRequestTypes.dailyForecast);
  const response = await axios.get(url);
  dispatchAction(weatherActionTypes.GET_16_DAY_FORECAST, response.data.data, dispatch);
};

export const setActiveCardIndex = (cardIndex) => (dispatch) => {
  dispatchAction(weatherActionTypes.SET_ACTIVE_CARD_INDEX, cardIndex, dispatch);
  dispatchAction(weatherActionTypes.GET_DAY_DETAILS, null, dispatch);
  dispatchAction(weatherActionTypes.SET_MOON_PHASE_INDEX, null, dispatch);
};
