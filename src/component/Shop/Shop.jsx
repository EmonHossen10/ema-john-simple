import React, { useEffect, useState } from 'react';
import "./shop.css"
import Product from '../product/Product';
const Shop = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch("products.json")
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[]);

      // event handeler
      const addToCart=(product)=>{
        console.log(product)
        }
    

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=><Product
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order summary</h4>
            </div>
        </div>
    );
};

export default Shop;