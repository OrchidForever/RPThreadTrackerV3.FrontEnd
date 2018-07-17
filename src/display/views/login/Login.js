// #region imports
import React, { Component } from 'react';
import { Row, Col, Card, CardBlock, Button } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from '../../forms/login/LoginForm';
import { submitUserLogin } from '../../../infrastructure/actions';
import LoadingIndicator from '../../shared/LoadingIndicator';
// #endregion imports

const propTypes = {
	submitUserLogin: PropTypes.func.isRequired,
	displayLoadingIndicator: PropTypes.bool.isRequired,
	loginError: PropTypes.string
};
const defaultProps = {
	loginError: ''
};

const mapStateToProps = (state) => {
	const {
		loading,
		errors
	} = state;
	return {
		displayLoadingIndicator: loading.loginLoading,
		loginError: errors.loginError
	};
};

class Login extends Component {
	constructor(props) {
		super(props);
		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			loginRequest: {}
		};
	}
	handleLoginSubmit() {
		this.props.submitUserLogin(this.state.loginRequest);
	}
	handleInputChange(event) {
		const { target } = event;
		const { name, value } = target;
		this.setState({
			loginRequest: Object.assign({}, this.state.loginRequest, {
				[name]: value
			})
		});
	}
	render() {
		const { displayLoadingIndicator, loginError } = this.props;
		let loading = (<span />);
		if (displayLoadingIndicator) {
			loading = (
				<LoadingIndicator style={{
					width: 50,
					height: 50,
					position: 'absolute',
					top: 0,
					right: 0
				}}
				/>
			);
		}
		let error = (<span />);
		if (loginError) {
			error = (
				<div className="has-danger">
					<p data-spec="login-server-error" className="form-control-feedback">{loginError}</p>
				</div>
			);
		}
		return (
			<Card className="login-box p-4">
				<CardBlock className="card-body">
					{loading}
					<AvForm
						data-spec="login-form-container"
						onValidSubmit={this.handleLoginSubmit}
					>
						<h1>Login</h1>
						<p className="text-muted">Sign in to RPThreadTracker</p>
						{error}
						<LoginForm handleInputChange={this.handleInputChange} />
						<Row>
							<Col xs="6">
								<Button color="primary" className="px-4">Login</Button>

							</Col>
							<Col xs="6" className="text-right text-muted">
								<a href="/register">Sign up</a> &bull; {' '}
								<a href="/forgotpassword">Forgot password?</a>
							</Col>
						</Row>
					</AvForm>
				</CardBlock>
			</Card>
		);
	}
}
Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
export default connect(mapStateToProps, {
	submitUserLogin
})(Login);
