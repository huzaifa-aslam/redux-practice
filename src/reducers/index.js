import { combineReducers } from "redux";
import Counter from "./Counter";
import User from "./User";
const allReducer = combineReducers({
    Counter,
    User
});
export default allReducer;