import React from 'react';
import images from '../imageManager'
import ProductInfo from './ProductInfo'
import ProductColor from './ProductColor'

export default class Product extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            product: 'Socks',
            brand: 'Vue Mastery',
            inStock: false,
            image: images.green,
            selectedVariant: 0,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: "assets/vmSocks-green.jpeg",
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: "assets/vmSocks-blue.jpeg",
                    variantQuantity: 0
                }
            ],
            cart: 0
        }
        this.addToCart = this.addToCart.bind(this);
        this.handleImage = this.handleImage.bind(this);
    }

    handleImage(variantColor){
        this.setState({
            image: images[variantColor]
        })
    }

    addToCart(cart) {
        this.setState({
            cart: cart += 1
        })
    }

    render() {
        const detailList = (details) => {
            return details.map((detail, idx) => {
                return (<ProductInfo key={idx} detail={detail}></ProductInfo>)
            })
        }
        const variantComponent = (variants) => {
            return variants.map((variant, idx) => {
                return (<ProductColor className="color-box" variant={variant} key={idx} id={idx} onImage={this.handleImage} />)
            })
        }



        return (
            <div className="product">
                <div className="product-image">
                    <img src={this.state.image} alt="vmSocks-green"></img>
                </div>
                <div className="product-info">
                    <h1>{this.state.brand + ' ' + this.state.product}</h1>
                    {this.state.inStock ? (<p>In Stock</p>) : (<p>Out of Stock</p>)}
                    <ul>
                        {detailList(this.state.details)}
                    </ul>
                    <ul>{variantComponent(this.state.variants)}</ul>
                    
                    <button 
                        onClick={ () => this.addToCart(this.state.cart) }
                        disabled={!this.state.inStock} className={this.state.inStock ? "":"disabledButton"}>
                    Add to Cart
                    </button>
                    <div className="cart">
                        <p>Cart({this.state.cart})</p>
                    </div>
                </div>
            </div>
        )
    }

    
}