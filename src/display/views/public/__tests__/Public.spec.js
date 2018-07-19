// #region imports
import React from 'react';
import { shallowWithState } from '../../../../../config/tests/helpers.unit';
import Public from '../Public';
// #endregion imports

// #region mocks
jest.mock('../../../../infrastructure/actions', () => ({}));
jest.mock('../../../../infrastructure/selectors', () => ({
	getPublicThreads: () => [{}, {}, {}],
	getIsLoadingIconVisible: () => false
}));
jest.mock('../../../../infrastructure/constants/legacyPublicValues', () => ({
	buildLegacyView: () => ({
		name: 'Legacy View',
		id: '54321'
	}),
	legacyPublicSlugs: [
		'invalidslug'
	]
}));
jest.mock('../PublicThreadTable', () => 'PublicThreadTable');
jest.mock('../PublicHeader', () => 'PublicHeader');
jest.mock('../_columns', () => () => [{}, {}, {}, {}]);
jest.mock('../../../shared/footer/Footer', () => 'Footer');
jest.mock('../../../shared/LoadingIndicator', () => 'LoadingIndicator');
jest.mock('../../../../utility', () => ({
	getQuery: () => ({})
}));
// #endregion mocks

const createTestProps = propOverrides => ({
	fetchLegacyPublicThreads: jest.fn(),
	slug: 'my-slug',
	fetchPublicThreads: jest.fn(),
	...propOverrides
});

const createTestState = stateOverrides => ({
	publicThreads: {
		threads: [],
		view: {
			name: 'Test View',
			id: '12345'
		}
	},
	...stateOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<Public {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('componentDidMount', () => {
		it('should fetch public threads if slug is valid', () => {
			const fetchPublicThreads = jest.fn();
			const props = createTestProps({ fetchPublicThreads });
			const state = createTestState();
			const jsx = (<Public {...props} />);
			shallowWithState(jsx, state).dive();
			expect(fetchPublicThreads).toHaveBeenCalledTimes(1);
			expect(fetchPublicThreads).toHaveBeenLastCalledWith('my-slug');
		});
		it('should fetch public threads if slug is legacy', () => {
			const fetchLegacyPublicThreads = jest.fn();
			const props = createTestProps({ fetchLegacyPublicThreads, slug: 'invalidslug' });
			const state = createTestState();
			const jsx = (<Public {...props} />);
			shallowWithState(jsx, state).dive();
			expect(fetchLegacyPublicThreads).toHaveBeenCalledTimes(1);
			expect(fetchLegacyPublicThreads).toHaveBeenLastCalledWith({ name: 'Legacy View', id: '54321' });
		});
	});
});