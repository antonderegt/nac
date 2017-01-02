import { DISPLAY, NAC } from '../actions/actions'

const reducer = (state = { display: NAC}, action) => {
  switch (action.type) {
    case DISPLAY:
      return {display: action.payload}
      break;
    default:
      return state
  }
}

export default reducer
