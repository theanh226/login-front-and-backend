import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "./../../common/TextFieldGroup";
import TextAreaFieldGroup from "./../../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import isEmpty from "./../../validation/is-empty";
import {
  addExperience,
  getCurrentProfile,
  getEditExperience,
  editExp
} from "./../../actions/profileActions";

// TODO: perfect this function

class Editxperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      title: "",
      location: "",
      from: "",
      to: "",
      current: false,
      description: "",
      errors: {},
      disabled: false
    };
  }
  componentDidMount = () => {
    if (this.props.match.params._id) {
      this.props.getEditExperience(this.props.match.params._id);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profileEdit.profileEdit) {
      const profileEdit = nextProps.profileEdit.profileEdit;

      // If exp field doesnt exist, make empty string
      profileEdit.company = !isEmpty(profileEdit.company)
        ? profileEdit.company
        : "";
      profileEdit.title = !isEmpty(profileEdit.title) ? profileEdit.title : "";
      profileEdit.location = !isEmpty(profileEdit.location)
        ? profileEdit.location
        : "";
      profileEdit.from = !isEmpty(profileEdit.from) ? profileEdit.from : "";
      profileEdit.to = !isEmpty(profileEdit.to) ? profileEdit.to : "";
      profileEdit.current = !isEmpty(profileEdit.current)
        ? profileEdit.current
        : false;
      profileEdit.description = !isEmpty(profileEdit.description)
        ? profileEdit.description
        : "";
      // Set component fields state
      this.setState({
        company: profileEdit.company,
        title: profileEdit.title,
        location: profileEdit.location,
        from: profileEdit.from,
        to: profileEdit.to,
        current: profileEdit.current,
        description: profileEdit.description
      });
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const { profileEdit } = this.props.profileEdit;

    const expData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.current === true ? null : this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.editExp(profileEdit._id, expData, this.props.history);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCheck = e => {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="add-experience">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-info">
                go back
              </Link>
              <h1 className="display-4 text-center">Edit Experience</h1>
              <p className="lead text-center">
                Edit any job or position that you have had in the past or
                current
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Company"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                />
                <TextFieldGroup
                  placeholder="* Job Title"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  error={errors.title}
                />
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                />
                <h6>From Date</h6>

                <TextFieldGroup
                  name="from"
                  type="date"
                  value={this.state.from}
                  onChange={this.onChange}
                  error={errors.from}
                />
                <h6>To Date</h6>

                <TextFieldGroup
                  name="to"
                  type="date"
                  value={this.state.to}
                  onChange={this.onChange}
                  error={errors.to}
                  disabled={this.state.current === true ? "disabled" : ""}
                />

                <div className="form-check mb-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="current"
                    value={this.state.current}
                    checked={this.state.current}
                    onChange={this.onCheck}
                    id="current"
                  />
                  <label htmlFor="current" className="form-check-label">
                    Current Job
                  </label>
                </div>
                <TextAreaFieldGroup
                  placeholder="Job Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                  info="Tell us about the the position"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Editxperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  getEditExperience: PropTypes.func.isRequired,
  profileEdit: PropTypes.object.isRequired,
  editExp: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profileEdit: state.editExp,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addExperience, getCurrentProfile, getEditExperience, editExp }
)(withRouter(Editxperience));
