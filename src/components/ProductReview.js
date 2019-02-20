import React from "react";

export default class ProductReview extends React.Component {
  render() {
    return (
      <p>
        {this.props.label} {this.props.value}
      </p>
    );
  }
}
