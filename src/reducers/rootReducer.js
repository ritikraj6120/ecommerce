import { combineReducers } from "redux";

import {
	getDetailsReducer
} from "./detailReducer"

const rootReducer = combineReducers({
	getDetails: getDetailsReducer,
	
});

export default rootReducer;
