import React from "react";

export default class ProductDetails extends React.Component {
  render() {
    return (
      <li>{this.props.detail}</li>
    );
  }
}
