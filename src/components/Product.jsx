import React from 'react'

function Product({product}) {
  return (
    <div className='product'>
        <img src={product.image} alt="" />
        </div>
  )
}

export default Product