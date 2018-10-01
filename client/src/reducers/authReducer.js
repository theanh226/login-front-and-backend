import * as Types from "../constant/Types";
import isEmpty from "../validation/is-empty";

const initialState = {
  isAuthenticated: false,
  currentUser: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Types.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.infoCurrentUser),
        currentUser: action.infoCurrentUser
      };
    default:
      return state;
  }
}
