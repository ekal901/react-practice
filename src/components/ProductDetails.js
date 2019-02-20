import React from "react";

export default class ProductDetails extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.detail}</li>
        </ul>
      </div>
    );
  }
}
