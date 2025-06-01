import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'


const Shop = () => {
     const products = useSelector(state => state.product)
  return (
    <div className=' mx-auto py-12 px-4 md:px-16 lg:px-24 bg-ternary mt-2 w-full'>
        <h2 className='text-3xl font-bold mb-6 text-center'>
          <Link to='/shop'>SHOP</Link>
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
          {products.products.slice(0).map(((product)=>(
            <ProductCard product = {product}/>
          )))}
        </div>
      </div>
  )
}

export default Shop
