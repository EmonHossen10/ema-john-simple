import React, { useEffect, useState } from 'react';
import "./shop.css"
import Product from '../product/Product';
import Cart from '../cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);


    useEffect(()=>{
        fetch("products.json")
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[]);
    useEffect(()=>{
        const storedCart=getShoppingCart();
    },[])

      // event handeler
      const addToCart=(product)=>{
            const newCart=[...cart,product];
            setCart(newCart);
            addToDb(product.id)

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
                <Cart 
                cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;