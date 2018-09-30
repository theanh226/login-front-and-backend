import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="position-footer-wapper">
        <footer className="bg-dark text-white p-4 text-center">
          Copyright &copy; {new Date().getFullYear()} Dev TheCorp
        </footer>
      </div>
    );
  }
}

export default Footer;
