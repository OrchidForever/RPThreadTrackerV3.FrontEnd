import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { navigation } from '../../../utility/history';

import {
	SUBMIT_USER_FORGOT_PASSWORD,
	submitUserForgotPasswordFailure,
	submitUserForgotPasswordSuccess
} from '../../actions';

function* submitUserForgotPassword(action) {
	try {
		yield call(axios.post, `${API_BASE_URL}api/auth/forgotpassword`, action.data);
		navigation.navigateTo('/login');
		yield put(submitUserForgotPasswordSuccess());
	} catch (e) {
		yield put(submitUserForgotPasswordFailure(e.response.data));
	}
}

export default function* submitUserForgotPasswordSaga() {
	yield takeEvery(SUBMIT_USER_FORGOT_PASSWORD, submitUserForgotPassword);
}
