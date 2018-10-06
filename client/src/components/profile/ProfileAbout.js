import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class ProfileAbout extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <h1>ProfileAbout</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAbout)
