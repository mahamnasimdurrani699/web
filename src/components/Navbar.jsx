import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaSearch,FaShoppingCart,FaUser} from 'react-icons/fa'
import {useSelector} from 'react-redux'
import Login from './Login'
import Register from './Register'
import { useState } from 'react'
import Modal from './Modal'
import { setSearchTerm } from '../redux/productSlice'
import { useDispatch } from 'react-redux';




const Navbar = () => {
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [isLogin, setIsLogin] = useState(true)
    const [search, setSearch] = useState()
    const dispatch = useDispatch();
   const navigate = useNavigate()


    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(setSearchTerm(search))
        navigate('/filter-data')

    }
    const openSignUp = () =>{
        setIsLogin(false)
        setIsModelOpen(true)
    }
    const openLogin = () =>{
        setIsLogin(true)
        setIsModelOpen(true)
    }
    const products = useSelector(state=>state.cart.products)
  return (
    <nav className='bg-ternary shadow-md'>
        <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
            <div className='text-4xl font-bold text-secondary'>
                <Link to="/">MND</Link>
            </div>
            <div className='relative flex-1 mx-4'>
                <form onSubmit={handleSearch}>
                <input type='text' placeholder='PLEASE SEARCH PRDUCT HERE' className='w-full border py-2 px-4' onChange={(e)=>setSearch(e.target.value)}/>
                <FaSearch className='absolute top-3 right-3 text-secondary'></FaSearch>
                </form>
            </div>
            <div className='flex items-center p-4'>
                <Link to="/cart" className='relative'>
                <FaShoppingCart className='text=lg text-secondary'></FaShoppingCart>
                {products.length > 0 && (
                    <span className='absolute top-1 text-xs w-3 left-3 bg-fourth rounded-full flex justify-center items-center text-white'>
                        {products.length}
                    </span>
                )}
                </Link>
            </div>
            <button className='hidden md:block'
            onClick={()=> setIsModelOpen(true)}
            >
                Login | Register
            </button>
            <button className='block md:hidden'>
                <FaUser/>
            </button>
        </div>
        <div className='flex justify-center items-center space-x-10 py-4 text-sm font-bold'>
            <Link to='/' className='hover:underline text-secondary'>HOME</Link>
            <Link to='/shop' className='hover:underline text-secondary'>SHOP</Link>
            <Link to='/Contact' className='hover:underline text-secondary'>CONTACT</Link>
            <Link to='/Aboutus' className='hover:underline text-secondary'>ABOUT</Link>
        </div>
        <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
            {isLogin ? <Login openSignUp={openSignUp}/> : <Register openLogin={openLogin}/> }
        </Modal>
    </nav>
  )
}

export default Navbar
