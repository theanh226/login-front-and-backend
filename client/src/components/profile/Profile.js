import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from ".//ProfileCreds";
import ProfileGithub from "./ProfileGithub";
import Spinner from "./../../common/Spinner";
import { Link } from "react-router-dom";
import { getProfileByHandle } from "./../../actions/profileActions";

export class Profile extends Component {
  static propTypes = {
    prop: PropTypes,
    getProfileByHandle: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  };

  render() {
    return (
      <div>
        <ProfileHeader />
        <ProfileAbout />
        <ProfileCreds />
        <ProfileGithub />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(Profile);
