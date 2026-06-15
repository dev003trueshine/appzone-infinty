import React from 'react';
import product1 from '../../assets/images/product/product.png';

export default function ProductCard() {
  return (
    <div className="product-card">
        <div className="mb-4">
          <img src={product1} alt="Product 1" className="product-icon" />
        </div>
      <div className="product-content">
        <h5 className="product-title">Python Programming</h5>
        <p className="product-desc">
          Enhance your projects with our expert Python programming products for efficient and scalable solutions.
        </p>
      </div>
    </div>
  );
}
