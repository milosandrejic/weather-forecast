import * as actionTypes from '../actionTypes/errorActionType';

const initalState = {
  showPopup: false,
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      return {
        showPopup: true,
      };
    case actionTypes.CLEAR_ERROR:
      return {
        showPopup: false,
      };
    default:
      return state;
  }
}
