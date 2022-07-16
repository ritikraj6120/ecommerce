import {
	Details_GET_REQUEST,
	Details_GET_SUCCESS,
	Details_GET_FAIL,
} from "../constants/detailConstant";
// import { handleLogout } from './userAction'
// import { notifyError, notifySuccess, notifyUnAuthorized, notifyWarning } from '../alert';


const host = "https://api.homedrop.in"

export const getDetails = () => async (dispatch) => {
	try {
		dispatch({
			type: Details_GET_REQUEST,
		});
		const response = await fetch(`${host}/products`, {
			method: 'GET',
		});
		if (response.status === 200) {
			const json = await response.json()
			dispatch({
				type: Details_GET_SUCCESS,
				payload: json,
			});
		}
		else {
			dispatch({
				type: Details_GET_FAIL,
				payload: "Details FETCHING FAILED",
			});
			// notifyError("Details FETCHING FAILED");
		}
	} catch (error) {
		dispatch({
			type: Details_GET_FAIL,
			payload: "FETCHING Details FAILED"
		});
		// notifyError("FETCHING Details FAILED");
	}
};
