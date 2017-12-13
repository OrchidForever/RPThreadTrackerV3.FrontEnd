import { SUBMIT_USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from '../actions';

function errors(state = {
	loginError: null
}, action) {
	switch (action.type) {
		case USER_LOGIN_SUCCESS:
		case SUBMIT_USER_LOGIN:
			return Object.assign({}, state, {
				loginError: null
			});
		case USER_LOGIN_FAILURE:
			return Object.assign({}, state, {
				loginError: action.data
			});
		default:
			return state;
	}
}

export default errors;
