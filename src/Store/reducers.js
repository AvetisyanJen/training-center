import { combineReducers } from "redux";
import { lessonReducer } from "./lessons/reducer";
import { studentReducer } from "./students/reducer";

export default combineReducers({
    lesState:lessonReducer,
    stState:studentReducer

})