// #region imports
import { takeEvery, put } from 'redux-saga/effects';
import cache from '../../cache';
import cacheKeys from '../../constants/cacheKeys';

import { LOAD_SITE_THEME, loadSiteThemeSuccess } from '../../actions';
// #endregion imports

function* loadSiteTheme() {
	let useLightTheme = cache.get(cacheKeys.USE_LIGHT_THEME);
	if (useLightTheme == null) {
		useLightTheme = false;
	}
	yield put(loadSiteThemeSuccess(useLightTheme));
}

export default function* loadSiteThemeSaga() {
	yield takeEvery(LOAD_SITE_THEME, loadSiteTheme);
}
