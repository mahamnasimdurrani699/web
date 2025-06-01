import React from 'react'
import {FaStar} from 'react-icons/fa'
import { addToCart } from '../redux/CartSlice'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  const handleAddToCart =(e,product) =>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))
    alert("Product added successfully")

  }
  return (
    <Link to={`/product/${product.id}`}>
    <div className='bg-ternary p-4 shadow rounded relative border'>  
      <img src= {product.img} alt='' className='h-48 w-full object-contain mb-4'></img>
      <h3 className='text-xl font-semibold'>{product.name}</h3>
      <p className='text-secondary'>Rs{product.price}</p>
      <div className='flex items-center mt-2'>
        <FaStar className='text-fourth'></FaStar>
        <FaStar className='text-fourth'></FaStar>
        <FaStar className='text-fourth'></FaStar>
        <FaStar className='text-fourth'></FaStar>
        <FaStar className='text-fourth'></FaStar>
      </div>
      <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-fourth group text-black  text-xl rounded-full' 
      onClick={(e)=>handleAddToCart(e,product)}>
        <span className='group-hover:hidden'>+</span>
        {/* <span className='hidden group-hover:block'>Add to cart</span> */}
      </div>
    </div>
    </Link>
  )
}

export default ProductCard
