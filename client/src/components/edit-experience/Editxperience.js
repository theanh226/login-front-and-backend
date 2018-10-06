import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "./../../common/TextFieldGroup";
import TextAreaFieldGroup from "./../../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  addExperience,
  getCurrentProfile,
  getEditExperience
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }



  onSubmit = e => {
    e.preventDefault();

    const expData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addExperience(expData, this.props.history);
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

  onDataTest = data => {
    console.log(data);
  };

  render() {
    const { errors } = this.state;

    const { profileEdit } = this.props.profileEdit;
    console.log(profileEdit);

    return (
      <div className="add-experience">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-info">
                go back
              </Link>
              {/* <button
                className="btn btn-danger"
                onClick={() => this.onDataTest(newExp)}
              >
                send data
              </button> */}
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
                  disabled={this.state.disabled ? "disabled" : ""}
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
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profileEdit: state.editExp,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addExperience, getCurrentProfile, getEditExperience }
)(withRouter(Editxperience));
