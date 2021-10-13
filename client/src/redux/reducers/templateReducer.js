import * as t from "../actions/types";

const templateReducer = (state = "temp1", action) => {
  switch (action.type) {
    case t.SET_TEMPLATE:
      return action.payload;

    default:
      return state;
  }
};

export default templateReducer;
