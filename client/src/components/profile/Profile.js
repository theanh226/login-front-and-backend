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
    const { profile, loading } = this.props.profile;
    let profileContent;
    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/profiles" className="btn btn-info mb-3 float-left">
                Back To Profiles
              </Link>
            </div>
            <div className="col-md-6" />
          </div>
          <ProfileHeader profile={profile} />
          <ProfileAbout profile={profile} />
          <ProfileCreds
            education={profile.education}
            experience={profile.experience}
          />
          {profile.githubusername ? (
            <ProfileGithub username={profile.githubusername} />
          ) : null}
        </div>
      );
    }
    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{profileContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(Profile);
