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
            inStock: true,
            image: images.green,
            premium: false,
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
            cart: 0
        }
        this.addToCart = this.addToCart.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.checkStock = this.checkStock.bind(this);
    }

    handleImage(variantImage, variantQuantity){
        this.setState({
            image: variantImage,
        })
        this.checkStock(variantQuantity);
    }

    checkStock(variantQuantity){
        if(variantQuantity > 0){
            this.setState({
                inStock: true
            })
        } else {
            this.setState({
                inStock: false
            })
        }
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
                    <p>User is Premium: {this.state.premium ? "true" : "false"}</p>
                    <p>Shipping: {this.state.premium ? "Free" : "$2.99"}</p>
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

Product.propTypes = {
    
}