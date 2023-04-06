import React from 'react';
import "./product.css"

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
            <button onClick={()=>addToCart(props.product)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;