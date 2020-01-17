import types from './actionTypes.js';

function openModal() {
  return dispatch => {
    dispatch({
      type: types.OPEN_MODAL,
    });
  }
}

function closeModal() {
  return dispatch => {
    dispatch({
      type: types.CLOSE_MODAL,
    });
  }
}

function setColorHex(color) {
  return dispatch => {
    dispatch({
      type: types.SET_COLOR_HEX,
      value: color,
    })
  }
}

function setColor(red, green, blue) {
  return dispatch => {
      dispatch({
        type: types.SET_COLOR_RED,
        valueColor: red,
      })
      dispatch({
        type: types.SET_COLOR_GREEN,
        valueColor: green,
      })
      dispatch({
        type: types.SET_COLOR_BLUE,
        valueColor: blue,
      })
  }
}

function setManualColor(color) {
  return dispatch => {
    dispatch({
      type: types.SET_MANUAL_COLOR,
      value: color,
    })
  }
}

function setColorRgb(color) {
  const red = color[0];
  const green = color[1];
  const blue = color[2];

  return dispatch => {
    dispatch(setColor(red, green, blue));
  }
}

function setTemporaryColor(hex) {
  return dispatch => {
    dispatch({
      type: types.SET_TEMPORARY_COLOR,
      value: hex,
    })
  }
}

export default { 
  setColor,
  openModal,
  closeModal,
  setManualColor,
  setColorRgb,
  setColorHex,
  setTemporaryColor,
};