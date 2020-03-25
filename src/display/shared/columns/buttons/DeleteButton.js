import React from 'react';
import columns from '../../../../infrastructure/constants/columns';

export default (title) => ({
	id: columns.DELETE_BUTTON.key,
	Cell: () => (
		<span>
			<i title={title} className="fas fa-trash-alt" />
		</span>
	),
	width: 30,
	style: {
		cursor: 'pointer',
		textAlign: 'center',
		userSelect: 'none'
	},
	sortable: false,
	resizable: false,
	filterable: false
});
