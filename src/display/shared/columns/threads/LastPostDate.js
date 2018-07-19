import React from 'react';
import Moment from 'react-moment';
import columns from '../../../../infrastructure/constants/columns';

export default () => ({
	Header: columns.LAST_POST_DATE.name,
	accessor: columns.LAST_POST_DATE.key,
	Cell: (row) => {
		if (!row.original.status && !row.original.thread.isArchived) {
			return (<span>Awaiting Starter</span>);
		}
		if (!row.original.status && row.original.thread.isArchived) {
			return (<span>Archived</span>);
		}
		return row.original.status.LastPostDate ?
			(<Moment format="MMMM D, YYYY h:mmA">{row.original.status.LastPostDate}</Moment>) :
			(<span>Post Not Found</span>);
	},
	minWidth: 200,
	filterable: false
});