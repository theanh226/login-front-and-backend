import {
  GET_EXP_TO_EDIT,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE
} from "./../constant/Types";

const initialState = {
  profileEdit: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_EXP_TO_EDIT:
      return {
        ...state,
        profileEdit: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      };
    default:
      return state;
  }
}
