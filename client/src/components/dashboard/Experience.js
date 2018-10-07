import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Moment from "react-moment";
import {
  deleteExperience,
  getEditExperience
} from "./../../actions/profileActions";

class Experience extends Component {
  onDeleteClick = id => {
    this.props.deleteExperience(id);
  };

  onEditExp = id => {
    this.props.getEditExperience(id);
  };

  render() {
    const experience = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          {exp.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </td>

        <td>
          <button
            onClick={() => this.onDeleteClick(exp._id)}
            className="btn btn-danger mr-2"
          >
            Delete
          </button>
          <Link to={`/edit-experience/${exp._id}`}>
            <button
              className="btn btn-info"
              onClick={() => this.onEditExp(exp._id)}
            >
              Edit
            </button>
          </Link>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Experience Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th />
            </tr>
            {experience}
          </thead>
        </table>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired,
  getEditExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience, getEditExperience }
)(Experience);
