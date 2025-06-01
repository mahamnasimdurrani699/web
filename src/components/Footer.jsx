import React from 'react'
import { FaInstagram,FaWhatsapp,FaGithub,FaFacebook } from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-secondary text-white py-8 px-4 md:px-16 lg:px-24 mt-2'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h4 className='text-xl font-semibold'>ECOHUB</h4>
          <p className='mt-4'>
            Your first step all you need.Shop with use and experience.Welcome for Vist our Website.
          </p>
        </div>
        <div className='flex flex-col md:items-center'>
          <h4  className='text-lg font-semibold'>Quick Link</h4>
          <ul className='mt-4 space-y-2'>
            <li>
              <Link to='/' className='hover:underline'>Home</Link>
            </li>
            <li>
              <Link to='/shop' className='hover:underline'>Shop</Link>
            </li>
            <li>
              <Link to='/Contact' className='hover:underline'>Contact</Link>
            </li>
            <li>
              <Link to='/Aboutus' className='hover:underline'>About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='text-lg font-semibold'>Follow Us</h4>
          <div className='flex space-x-4 mt-4'>
            <a href='' className='hover:text-fourth'><FaFacebook/></a>
            <a href='' className='hover:text-fourth'><FaInstagram/></a>
            <a href='' className='hover:text-fourth'><FaWhatsapp/></a>
            <a href='' className='hover:text-fourth'><FaGithub/></a>
          </div>
          <form className='flex items-center justify-center mt-8'>
            <input type='email' placeholder='Enter Email' className='w-full p-2 rounded-l-lg bg-ternary border border-white text-secondary'></input>
            <button className='bg-fourth px-4 py-2 rounded-r-lg'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='mt-8 border-t border-fourth'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
          <p>&copy; 2024 ECOHUB All Rights reserved.</p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <a href='' className='hover:underline'>Privacy Policy</a>
            <a href=''  className='hover:underline'>Terms & Condition</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
