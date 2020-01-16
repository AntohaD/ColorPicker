import types from './actionTypes.js';

function setColor(value, type) {
  return dispatch => {
    if (type === 'red') {
      dispatch({
        type: types.SET_COLOR_RED,
        valueColor: Math.abs(value),
      })
    } else if (type === 'green') {
      dispatch({
        type: types.SET_COLOR_GREEN,
        valueColor: Math.abs(value),
      })
    } else {
      dispatch({
        type: types.SET_COLOR_BLUE,
        valueColor: Math.abs(value),
      })
    }
  }
}

export default { 
  setColor,
};