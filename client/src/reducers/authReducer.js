import * as Types from "./../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Types.SET_CURRENT_USER:
      return {
        ...state,
        new_user_regiseter: action.payload
      };
    default:
      return state;
  }
}
