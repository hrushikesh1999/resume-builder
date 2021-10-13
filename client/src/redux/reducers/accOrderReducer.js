import * as t from "../actions/types";
const initialState = [
  "personal",
  "profile",
  "education",
  "work",
  "skills",
  "projects",
  "certifications",
];
const accOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SET_ORDER:
      return action.payload;

    default:
      return state;
  }
};

export default accOrderReducer;
