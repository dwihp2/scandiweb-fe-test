import React, { Component } from "react";
import "./Pages.css";
import sampleImg from "../../Product D.png";

class WomenPage extends Component {
  render() {
    return (
      <>
        <div className="category-name">
          <h2>Women Page</h2>
        </div>
        <div className="product-grid">
          <div className="product-card">
            <img src={sampleImg} alt="Product D" className="product-image" />
            <p className="product-title">Apollo Running Short</p>
            <p className="product-price">$50.00</p>
          </div>
          <div className="product-card">
            <img src={sampleImg} alt="Product D" className="product-image" />
            <p className="product-title">Apollo Running Short</p>
            <p className="product-price">$50.00</p>
          </div>
          <div className="product-card">
            <img src={sampleImg} alt="Product D" className="product-image" />
            <p className="product-title">Apollo Running Short</p>
            <p className="product-price">$50.00</p>
          </div>
          <div className="product-card">
            <img src={sampleImg} alt="Product D" className="product-image" />
            <p className="product-title">Apollo Running Short</p>
            <p className="product-price">$50.00</p>
          </div>
          <div className="product-card">
            <img src={sampleImg} alt="Product D" className="product-image" />
            <p className="product-title">Apollo Running Short</p>
            <p className="product-price">$50.00</p>
          </div>
        </div>
      </>
    );
  }
}

export default WomenPage;
