const dispatchAction = (type, payload = {}, dispatch) => {
  return dispatch({ type, payload });
};

export default dispatchAction;
