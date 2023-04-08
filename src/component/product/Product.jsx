import React from 'react';
import "./product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props.product);
    const {img,name,seller,price,ratings}=props.product;
    // destructuring function
    const addToCart=props.addToCart;
  
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'> 
            <h6 className='product-container'>{name}</h6>
            <p>price : ${price}</p>
            <p>Manufacturer : {seller}</p>
            <p>Rattings : {ratings} stars</p>
            </div>
            <button onClick={()=>addToCart(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;