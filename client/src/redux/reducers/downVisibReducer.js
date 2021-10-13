import * as t from "../actions/types";

const downVisibReducer = (state = false, action) => {
  switch (action.type) {
    case t.SET_DOWNLOAD_VISIBLE:
      return action.payload;

    default:
      return state;
  }
};

export default downVisibReducer;
