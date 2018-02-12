import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import activeThreads from './activeThreads';
import activeThreadsStatus from './activeThreadsStatus';
import archivedThreads from './archivedThreads';
import characterToEdit from './characterToEdit';
import characters from './characters';
import errors from './errors';
import loading from './loading';
import news from './news';
import randomThread from './randomThread';
import tags from './tags';
import threadFilter from './threadFilter';
import ui from './ui';
import user from './user';
import userSettings from './userSettings';

export default combineReducers({
	activeThreads,
	activeThreadsStatus,
	archivedThreads,
	characterToEdit,
	characters,
	errors,
	loading,
	news,
	randomThread,
	tags,
	threadFilter,
	toastr,
	ui,
	user,
	userSettings
});
