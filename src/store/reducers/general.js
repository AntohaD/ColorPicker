import ACTION_TYPES from '../actions/general/actionTypes';

const initialState = {
  redColor: 0,
  greenColor: 0,
  blueColor: 0,
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
    default: 
      return state
  }
}

export default General;