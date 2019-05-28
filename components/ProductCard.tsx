import { Card } from 'antd-mobile'
import React from 'react'

import { IProduct } from '../interfaces/product'

const ProductCard = (product: IProduct) => {
  return (
    <Card full={true}>
      <div
        style={{
          backgroundImage: `url("${product.images[0]}")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: 500
        }}
      />
      <Card.Body>
        <div>name : {product.name}</div>
        <div>price : {product.price.priceDisplay}</div>
        <div>rating: {product.review ? product.review.rating : ''}</div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
