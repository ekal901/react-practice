import React from "react";

export default class ReviewError extends React.Component {
  render() {
    return (
      <div>
        {this.props.label} {this.props.value}
      </div>
    );
  }
}
