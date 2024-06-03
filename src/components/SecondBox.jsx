import React, { Component } from 'react'

class SecondBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>Academy Name: {this.props.name}</h1>
        <h2>Course Name: {this.props.courseName}</h2>
      </>
    )
  }
}

export default SecondBox;