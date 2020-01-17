import ACTION_TYPES from '../actions/general/actionTypes';

const initialState = {
  redColor: 0,
  greenColor: 0,
  blueColor: 0,
  isModalOpen: false,
  color: '#A9A9A9',
  temporaryColor: '',
}

const General = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_TYPES.SET_COLOR_RED:
      return {
        ...state, redColor: action.valueColor,
      }
    case ACTION_TYPES.SET_COLOR_GREEN:
      return {
        ...state, greenColor: action.valueColor,
      }
    case ACTION_TYPES.SET_COLOR_BLUE:
      return {
        ...state, blueColor: action.valueColor,
      }
    case ACTION_TYPES.OPEN_MODAL:
      return {
        ...state, isModalOpen: true,
      }
    case ACTION_TYPES.CLOSE_MODAL:
      return {
        ...state, isModalOpen: false, temporaryColor: state.color,
      }
    case ACTION_TYPES.SET_MANUAL_COLOR:
      return {
        ...state, color: action.value,
      }
    case ACTION_TYPES.SET_COLOR_HEX:
      return {
        ...state, color: action.value,
      }
    case ACTION_TYPES.SET_TEMPORARY_COLOR:
      return {
        ...state, temporaryColor: action.value,
      }
    default: 
      return state
  }
}

export default General;