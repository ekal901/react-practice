import React from "react";
import images from "../imageManager";
import ProductDetails from "./ProductDetails";
import ProductColor from "./ProductColor";
import ReviewForm from "./ReviewForm";
import ProductReview from "./ProductReview";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "Socks",
      brand: "React Mastery",
      inStock: true,
      image: images.green,
      premium: true,
      selectedVariant: 0,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: images.green,
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: images.blue,
          variantQuantity: 0
        }
      ],
      reviews: []
    };
  }

  handleImage = index => {
    this.setState({
      image: this.state.variants[index].variantImage
    });
  };

  checkStock = variantQuantity => {
    console.log(variantQuantity);
    if (variantQuantity > 0) {
      this.setState({
        inStock: true
      });
    } else {
      this.setState({
        inStock: false
      });
    }
  };

  handleProduct = index => {
    this.setState(
      { selectedVariant: index }, () => {//run function after setState
        this.handleImage(this.state.selectedVariant);
        this.checkStock(this.state.variants[index].variantQuantity);
      }
    );
  };
  addToCart = () => {
    let productId = this.state.variants[this.state.selectedVariant].variantId;
    this.props.onCart(productId);
  };

  showReview = review => {
    this.setState({
      reviews: this.state.reviews.concat(review)
    });
  };

  render() {
    const detailList = details => {
      return details.map((detail, idx) => {
        return <ProductDetails key={idx} detail={detail} />;
      });
    };
    const variantComponent = variants => {
      return variants.map((variant, idx) => {
        return (
          <ul>
            <ProductColor
              className="color-box"
              variant={variant}
              key={idx}
              id={idx}
              onProduct={this.handleProduct}
            />
          </ul>
        );
      });
    };

    const reviewList = reviews => {
      return reviews.map((review, idx) => {
        return (
          <li>
            <ProductReview value={review.name} />
            <ProductReview label="ratings: " value={review.rating} />
            <ProductReview value={review.review} />
          </li>
        );
      });
    };

    return (
      <div className="product">
        <div className="product-image">
          <img src={this.state.image} alt={this.state.image} />
        </div>
        <div className="product-info">
          <h1>{this.state.brand + " " + this.state.product}</h1>
          {this.state.inStock ? <p>In Stock</p> : <p>Out of Stock</p>}
          <p>User is Premium: {this.state.premium ? "true" : "false"}</p>
          <p>Shipping: {this.state.premium ? "Free" : "$2.99"}</p>
          <ul>{detailList(this.state.details)}</ul>
          <ul>{variantComponent(this.state.variants)}</ul>
          <button
            onClick={() => this.addToCart()}
            disabled={!this.state.inStock}
            className={this.state.inStock ? "" : "disabledButton"}>Add to Cart
          </button>
          <div>
            <h2>Reviews</h2>
            {this.state.reviews.length === 0 ? (<p>There are no reviews yet.</p>) : (<ul>{reviewList(this.state.reviews)}</ul>)}
          </div>
          <ReviewForm showReview={this.showReview} />
        </div>
      </div>
    );
  }
}
