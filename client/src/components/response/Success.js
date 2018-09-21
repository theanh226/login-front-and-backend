import React, { Component } from "react";
import { Link } from "react-router-dom";

class Successs extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-success text-center mb-4">
          The account has been initialized successfully
        </h3>
        <div class="d-flex justify-content-center mt-3">
          <Link to="/login" className="btn btn-lg btn-success text-white">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }
}
export default Successs;
