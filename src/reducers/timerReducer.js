import * as c from '../actions/constants';

export const timerReducer = (state = { timers: [] }, action) => {
	switch (action.type) {
		case c.ADD_TIMER:
			return {
				...state,
				timers: [...state.timers, action.payload],
			};
		case c.DELETE_TIMER:
			return {
				...state,
				timers: state.timers.filter((timer) => timer.id !== action.payload),
			};
		case c.SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		case c.CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};
		case c.UPDATE_TIMER:
			return {
				...state,
				timers: state.timers.map((timer) =>
					timer.id === action.payload.id ? action.payload : timer
				),
			};
		default:
			return state;
	}
};
