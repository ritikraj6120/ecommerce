import {
	Details_GET_REQUEST,
	Details_GET_SUCCESS,
	Details_GET_FAIL,
} from "../constants/detailConstant";

export const getDetailsReducer = (state = { loading: true, details: {}, error: null }, action) => {
	switch (action.type) {

		case Details_GET_REQUEST:
			return { ...state, loading: true, details: null, error: null };

		case Details_GET_SUCCESS:
			return { ...state, loading: false, details: action.payload, error: null };

		case Details_GET_FAIL:
			return { ...state, loading: false, details: null, error: action.payload };
		default:
			return state;
	}
};