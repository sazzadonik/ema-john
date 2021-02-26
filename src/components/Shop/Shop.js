import React from "react";
import fakeData from "../../fakeData";
import { useState } from "react";
import "./Shop.css";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";

const Shop = () => {
  const firstTen = fakeData.slice(0, 10);

  const [products, setProducts] = useState(firstTen);
  const [cart, setCartCount] = useState([]);
  const handleAddProduct = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCartCount(newCart);
  };

  return (
    <div className="shopContainer">
      <div className="productContainer">
        {products.map((product) => (
          <Products
            product={product}
            handleAddProduct={handleAddProduct}
          ></Products>
        ))}
      </div>
      <div className="cartContainer">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
