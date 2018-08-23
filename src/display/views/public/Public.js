import React, { Component } from 'react';
import {
	Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../infrastructure/actions';
import ThreadTable from './PublicThreadTable';
import PublicHeader from './PublicHeader';
import PublicThreadFilterSelect from './PublicThreadFilterSelect';
import getColumns from './_columns';
import * as selectors from '../../../infrastructure/selectors';
import Footer from '../../shared/footer/Footer';
import { legacyPublicSlugs, buildLegacyView } from '../../../infrastructure/constants/legacyPublicValues';
import { getQuery } from '../../../utility';

const propTypes = {
	isLoadingIconVisible: PropTypes.bool.isRequired,
	threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	fetchLegacyPublicThreads: PropTypes.func.isRequired,
	slug: PropTypes.string,
	view: PropTypes.shape({}).isRequired,
	fetchPublicThreads: PropTypes.func.isRequired,
	setPublicThreadFilter: PropTypes.func.isRequired,
	publicThreadFilter: PropTypes.string.isRequired
};

const defaultProps = {
	slug: ''
};

function mapStateToProps(state) {
	const publicThreads = selectors.getPublicThreads(state);
	const isLoadingIconVisible = selectors.getIsLoadingIconVisible(state);
	return {
		view: state.publicThreads.view,
		threads: publicThreads,
		isLoadingIconVisible,
		publicThreadFilter: state.publicThreadFilter
	};
}

class Public extends Component {
	componentDidMount() {
		const { slug, fetchPublicThreads } = this.props;
		if (legacyPublicSlugs.includes(slug)) {
			this.fetchLegacyView(slug);
			return;
		}
		fetchPublicThreads(slug);
	}

	fetchLegacyView(slug) {
		const query = getQuery();
		const { fetchLegacyPublicThreads } = this.props;
		const view = buildLegacyView(query, slug);
		fetchLegacyPublicThreads(view);
	}

	render() {
		const {
			view,
			threads,
			slug,
			isLoadingIconVisible,
			setPublicThreadFilter,
			publicThreadFilter
		} = this.props;
		return (
			<div className="animated fadeIn">
				<PublicHeader title={view.name} slug={slug} isLoadingIconVisible={isLoadingIconVisible} />
				<PublicThreadFilterSelect
					setPublicThreadFilter={setPublicThreadFilter}
					publicThreadFilter={publicThreadFilter}
				/>
				<Row>
					<Col>
						<ThreadTable
							columns={getColumns(view.columns)}
							threads={threads}
							view={view}
							isLoadingIconVisible={isLoadingIconVisible}
						/>
					</Col>
				</Row>
				<Footer />
			</div>
		);
	}
}

Public.propTypes = propTypes;
Public.defaultProps = defaultProps;
export default connect(mapStateToProps, {
	fetchPublicThreads: actions.fetchPublicThreads,
	fetchLegacyPublicThreads: actions.fetchLegacyPublicThreads,
	setPublicThreadFilter: actions.setPublicThreadFilter
})(Public);
