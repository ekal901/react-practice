import React from "react";

export default class ReviewError extends React.Component {
  render() {
    return (
      <p>
        {this.props.label} {this.props.value}
      </p>
    );
  }
}
