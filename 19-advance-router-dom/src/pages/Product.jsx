import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <Link className='text-xl font-semibold' to="/product/men">Men</Link>
      <Link className='text-xl font-semibold' to="/product/women">Women</Link>
      <Link className='text-xl font-semibold' to="/product/kids">Kids</Link>
    </div>
  )
}

export default Product
