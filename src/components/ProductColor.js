import React from "react";

export default class ProductColor extends React.Component {
  updateProduct() {
    // this.props.onImage(this.props.id) //passing index
    // this.props.onImage(this.props.id);
    this.props.onProduct(this.props.id);
  }

  render() {
    const style = {
      backgroundColor: this.props.variant.variantColor
    };
    return (
      <div
        className="color-box"
        style={style}
        onMouseOver={() => {
          this.updateProduct();
        }}
      />
    );
  }
}
