import * as t from "../actions/types";
var INITIAL_STATE = {
  personal: {},
  profile: "",
  education: [],
  experience: {},
  skills: {},
  projects: {},
  certifications: {},
  strengths: {},
};
const resumeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case t.UPDATE_PERSONAL:
      return { ...state, personal: action.payload };
    case t.UPDATE_PROFILE:
      return { ...state, profile: action.payload };
    case t.ADD_EDUCATION:
      let index = state.education.findIndex(
        (element) => element.key === action.payload.key
      );
      if (index === -1) {
        return { ...state, education: [...state.education, action.payload] };
      } else {
        let tempState = state.education;
        tempState.splice(index, 1, action.payload);
        return { ...state, education: tempState };
      }
    case t.DELETE_EDUCATION:
      let temp = state.education;
      temp.splice(action.payload, 1);
      return { ...state, education: temp };
    default:
      return state;
  }
};

export default resumeReducer;
