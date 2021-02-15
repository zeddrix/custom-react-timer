import { combineReducers } from 'redux';

import { timerReducer } from './reducers/timerReducer';

const reducer = combineReducers({
	timersState: timerReducer,
});

export default reducer;
