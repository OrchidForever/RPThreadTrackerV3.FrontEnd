import { createSelector } from 'reselect';
import { flattenArrayOfArrays, filterDuplicatesFromArray, sortTags } from '../../../../utility';
import { getAllArchivedThreads } from '../../common';

const getArchivedThreadTags = createSelector([getAllArchivedThreads], (threads) => {
	if (!threads.length) {
		return [];
	}
	const tagArrays = threads.map((t) => t.threadTags);
	const flattened = flattenArrayOfArrays(tagArrays);
	const filtered = filterDuplicatesFromArray(flattened, 'tagText');
	filtered.sort(sortTags);
	return filtered;
});
export default getArchivedThreadTags;
