import { combineReducers } from "redux";
import accOrderReducer from "./accOrderReducer";
import downVisibReducer from "./downVisibReducer";
import resumeReducer from "./resumeReducer";
import templateReducer from "./templateReducer";

export default combineReducers({
  resume: resumeReducer,
  template: templateReducer,
  accOrder: accOrderReducer,
  isDownloadVisible: downVisibReducer,
});
