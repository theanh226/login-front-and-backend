import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Login from "../components/auth/Login";

export class LoginContainer extends Component {
  render() {
    var { auth, errors } = this.props;
    return <Login auth={auth} errors={errors} />;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch1: () => {
      dispatch(actionCreator);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
