import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Products.css";

const Products = (props) => {
  //   console.log(props);
  //   console.log(props.product.wholePrice);
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="productName">
        <h4>{name}</h4>
        <br />
        <p>
          <small>by: {seller} </small>
        </p>
        <p>Price: ${price}</p>
        <br />
        <p>
          <small>Only {stock} left in stock - order soon </small>
        </p>
        <button
          className="addCart"
          onClick={() => props.handleAddProduct(props.product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
