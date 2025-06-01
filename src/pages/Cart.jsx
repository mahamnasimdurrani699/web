// import React, { useState } from 'react'
// import {useSelector} from 'react-redux'
// import {FaTrashAlt} from 'react-icons/fa'
// import Modal from '../components/Modal'



// const Cart = () => {
//     const cart = useSelector(state=>state.cart);
//     const [address,setAddress] = useState('main Street,01234')
//     const [isModelOpen, setIsModelOpen] = useState(false)

//   return (
//     <div className='w-full bg-ternary mt-2'>
//         <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
//       {cart.products.length > 0 ?
//       <div>
//         <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
//         <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
//             <div className='md:w-2/3'>
//                 <div className='flex justify-between border-b items-center mb-4 text-xs font-bold'>
//                     <p>PRODUCTS</p>
//                     <div className='flex space-x-8'>
//                         <p>PRICE</p>
//                         <p>QUANTITY</p>
//                         <p>SUBTOTAL</p>
//                         <p>REMOVE</p>
//                     </div>
//                 </div>
//                 <div>
//                     {cart.products.map((product)=>(
//                         <div key={product.id} className='flex items-center justify-between p-3 border-b'>
//                             <div className='md:flex items-center space-x-4'>
//                                 <img src={product.image} className='h-16 w-16 object-contain rounded'></img>
//                                 <div className='flex-l ml-4'>
//                                     <h3 className='text-lg font-semifold'>{product.name}</h3>
//                                 </div>
//                             </div>
//                             <div className='flex items-center space-x-12'>
//                                 <p>Rs.{product.price}</p>
//                                 <div className='flex items-center justify-center border'>
//                                     <button className='text-xl font-bold px-1.5 border bg-fourth text-black'>-</button>
//                                     <p className='text-xl px-1'>{product.quantity}</p>
//                                     <button className='text-xl font-bold px-1.5 border bg-fourth text-black'>+</button>
//                                 </div>
//                                 <p>Rs.{(product.quantity * product.price).toFixed(0)}</p>
//                                 <button className='text-red-800'><FaTrashAlt/></button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className='md:w-1/3 p-6 rounded-lg shadow-md border bg-secondary text-white'>
//                 <h3 className='text-sm font-semibold mb-5'>CART TOTAL</h3>
//                 <div className='flex justify-between mb-5 border-b pb-1'>
//                     <span className='text-sm'>Total Items:</span>
//                     <span>{cart.totalQuantity}</span>
//                 </div>
//                 <div className='mb-4 pb-2 border-b'>
//                     <p>Shipping:</p>
//                     <p className='ml-2'>Shipping to:</p>
//                     <span className='text-xs font-bold'>{address}</span>
//                     <button className='flex justify-between mb-4 hover:underline'
//                     onClick={() => setIsModelOpen(true)}
//                     >Change Address</button>
//                 </div>
//                 <div>
//                     <span>Total Price:</span>
//                     <span>{cart.totalPrice.toFixed(0)}</span>
//                 </div>
//                 <button className='w-full bg-fourth py-3 mt-1'>Proceed to Checkout</button>
//             </div>
//         </div>
//         <Modal>
//             isModelOpen = {isModelOpen}
//             setIsModelOpen = {setIsModelOpen}
//         </Modal>
//       </div>
//     : <div className='flex justify-center bg-ternary mt-2'>
//         <img src='public/empty.jpg' className='h-96'></img>
//       </div>}
//     </div>
//     </div>
//   )
// }

// export default Cart

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import Modal from '../components/Modal';
import ChangeAddress from '../components/ChangeAddress'; // Import the ChangeAddress component
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/CartSlice';
import { useNavigate } from 'react-router-dom';




const Cart = () => {
  const cart = useSelector(state => state.cart);
  const [address, setAddress] = useState('main Street, 01234');
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate() 

  return (
    <div className="w-full bg-ternary mt-2">
      <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
        {cart.products.length > 0 ? (
          <div>
            <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
            <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
              <div className="md:w-2/3">
                <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                  <p>PRODUCTS</p>
                  <div className="flex space-x-8">
                    <p>PRICE</p>
                    <p>QUANTITY</p>
                    <p>SUBTOTAL</p>
                    <p>REMOVE</p>
                  </div>
                </div>
                <div>
                  {cart.products.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-3 border-b">
                      <div className="md:flex items-center space-x-4">
                        <img src={product.image} className="h-16 w-16 object-contain rounded" alt="Product" />
                        <div className="flex-l ml-4">
                          <h3 className="text-lg font-semibold">{product.name}</h3>
                        </div>
                      </div>
                      <div className="flex items-center space-x-12">
                        <p>Rs.{product.price}</p>
                        <div className="flex items-center justify-center border">
                          <button className="text-xl font-bold px-1.5 border bg-fourth text-black"
                          onClick={() => dispatch(decreaseQuantity(product.id))}
                          >-</button>
                          <p className="text-xl px-1">{product.quantity}</p>
                          <button className="text-xl font-bold px-1.5 border bg-fourth text-black"
                          onClick={() => dispatch(increaseQuantity(product.id))}
                          >+</button>
                        </div>
                        <p>Rs.{(product.quantity * product.price).toFixed(0)}</p>
                        <button className="text-red-800"
                        onClick={() => dispatch(removeFromCart(product.id))}>
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/3 p-6 rounded-lg shadow-md border bg-secondary text-white">
                <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
                <div className="flex justify-between mb-5 border-b pb-1">
                  <span className="text-sm">Total Items:</span>
                  <span>{cart.totalQuantity}</span>
                </div>
                <div className="mb-4 pb-2 border-b">
                  <p>Shipping:</p>
                  <p className="ml-2">Shipping to:</p>
                  <span className="text-xs font-bold">{address}</span>
                  <button
                    className="flex justify-between mb-4 hover:underline"
                    onClick={() => setIsModelOpen(true)}
                  >
                    Change Address
                  </button>
                </div>
                <div className='flex justify-between'>
                  <span>Total Price:</span>
                  <span>{cart.totalPrice.toFixed(0)}</span>
                </div>
                <button className="w-full bg-fourth py-3 mt-1"
                onClick={() => navigate("/checkout")}
                >Proceed to Checkout</button>
              </div>
            </div>
            {/* Pass the ChangeAddress component as children to Modal */}
            <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
              <ChangeAddress  setAddress = {setAddress} setIsModelOpen = {setIsModelOpen}/>
            </Modal>
          </div>
        ) : (
          <div className="flex justify-center bg-ternary mt-2">
            <img src="public/empty.jpg" className="h-96" alt="Empty Cart" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

