import * as c from './constants';

export const addTimer = (newTimer) => (dispatch) => {
	dispatch({
		type: c.ADD_TIMER,
		payload: newTimer,
	});
};

export const deleteTimer = (id) => (dispatch) => {
	dispatch({
		type: c.DELETE_TIMER,
		payload: id,
	});
};

export const setCurrent = (timer) => {
	return {
		type: c.SET_CURRENT,
		payload: timer,
	};
};

export const clearCurrent = () => {
	return {
		type: c.CLEAR_CURRENT,
	};
};

export const updateTimer = (timer) => (dispatch) => {
	dispatch({
		type: c.UPDATE_TIMER,
		payload: timer,
	});
};
