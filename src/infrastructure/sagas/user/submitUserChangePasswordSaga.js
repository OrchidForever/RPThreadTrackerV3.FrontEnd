import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
	SUBMIT_USER_CHANGE_PASSWORD,
	submitUserChangePasswordSuccess,
	submitUserChangePasswordFailure
} from '../../actions';

function* submitUserChangePassword(action) {
	try {
		yield call(axios.put, `${API_BASE_URL}api/user/password`, action.data);
		yield put(submitUserChangePasswordSuccess());
	} catch (e) {
		yield put(submitUserChangePasswordFailure(e.response.data));
	}
}

export default function* submitUserChangePasswordSaga() {
	yield takeEvery(SUBMIT_USER_CHANGE_PASSWORD, submitUserChangePassword);
}
