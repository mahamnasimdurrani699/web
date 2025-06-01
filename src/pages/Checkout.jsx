import React, { useState } from 'react'
import { FaAngleUp } from 'react-icons/fa'
import { FaAngleDown } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Checkout = ({setOrder}) => {
    const [billingToggle, setBillingToggle] = useState(true)
    const [shippingToggle, setShippingToggle] = useState(false)
    const [paymentToggle, setPaymentToggle] = useState(false)

    const [paymentMethod, setPaymentMethod] = useState("cod")
    const [shippingInformation, setShippingInformation] = useState({
        address:'',
        city:'',
        zip:''
    })

    const cart = useSelector(state => state.cart);
    const navigate = useNavigate()
    //  const handleOrder = () => {
    //     const newOrder = {
    //         products : cart.products,
    //         orderNumber: "1234566",
    //         shippingInformation : shippingInformation,
    //         totalPrice: cart.totalPrice

    //     }
    //     setOrder(newOrder)
    //     navigate("/order-confirmation")
    //  }
    const handleOrder = () => {
        const newOrder = {
          products: cart.products,
          orderNumber: "1234566",
          shippingInformation: shippingInformation,
          totalPrice: cart.totalPrice,
        };
      
        setOrder(newOrder);
        navigate("/order-confirmation");
      };
      


    return (
        <div className="w-full bg-ternary mt-2">
            <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
                <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
                <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-10 mt-8">
                    <div className="md:w-2/3">
                        <div className="p-2 mb-6 border">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setBillingToggle(!billingToggle)}
                            >
                                <h3 className="text-lg font-semibold">Billing Information</h3>
                                {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                            </div>

                            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                                <div>
                                    <label className="block text-gray-800">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter the name"
                                        className="w-full px-3 py-2 border"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-800">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter the email"
                                        className="w-full px-3 py-2 border"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-800">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Enter the phone"
                                        className="w-full px-3 py-2 border"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="p-2 mb-6 border">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setShippingToggle(!shippingToggle)}
                            >
                                <h3 className="text-lg font-semibold">Shipping Information</h3>
                                {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                            </div>

                            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                                <div>
                                    <label className="block text-gray-800">Address</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter the address"
                                        className="w-full px-3 py-2 border"
                                        onChange={(e)=>setShippingInformation({...shippingInformation, address: e.target.value})}
                                       
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-800">city</label>
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="Enter the city"
                                        className="w-full px-3 py-2 border"
                                        onChange={(e)=>setShippingInformation({...shippingInformation, city: e.target.value})}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-800">ZipCode</label>
                                    <input
                                        type="text"
                                        name="Zipcode"
                                        placeholder="Enter the code"
                                        className="w-full px-3 py-2 border"
                                        onChange={(e)=>setShippingInformation({...shippingInformation, zip: e.target.value})}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="p-2 mb-6 border">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setPaymentToggle(!paymentToggle)}
                            >
                                <h3 className="text-lg font-semibold">Payment Method</h3>
                                {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                            </div>

                            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                                <div className='flex items-center mb-2'>
                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={paymentMethod === "cod"}
                                        onChange={() => setPaymentMethod("cod")}

                                    />
                                    <label className="block text-gray-800 ml-2">Cash on Delivery</label>
                                </div>
                                <div className='flex items-center mb-2'>
                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={paymentMethod === "dc"}
                                        onChange={() => setPaymentMethod("dc")}

                                    />
                                    <label className="block text-gray-800 ml-2">Debit Card</label>
                                </div>
                                {paymentMethod === "dc" && (
                                    <div className="p-6 border rounded-lg  shadow-md">
                                        <h3 className="text-lg font-semibold mb-4">Debit Card Information</h3>
                                        <div>
                                            <label className="block text-gray-700 mb-1" htmlFor=''>Card Number</label>
                                            <input
                                                type='text'
                                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-1" htmlFor=''>Card Holder Name</label>
                                            <input
                                                type='text'
                                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-1" htmlFor=''>Expire Date</label>
                                            <input
                                                type=''
                                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-1" htmlFor=''>CVV</label>
                                            <input
                                                type=''
                                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/3 p-6 rounded-lg shadow-md border bg-secondary text-white">
                        <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
                        <div className='space-y-4'>
                          {cart.products.map(product => (
                            <div key={product.id} className='flex justify-between'>
                                <div className='flex items-center'>
                                    <img src={product.image} alt={product.name} className='w-16 h-16 rounded object-contain'></img>
                                    <div className='ml-4'>
                                        <h3 className='text-md font-semibold'>{product.name}</h3>
                                        <p>Rs.{product.price} * {product.quantity}</p>
                                    </div>
                                </div>
                            </div>
                          ))}
                        </div>
                        <div className='mt-4 pt-4 border-t'>
                            <div className='flex justify-between'>
                            <span>Total Price</span>
                            <span className='font-semibold'>Rs.{cart.totalPrice.toFixed(0)}</span>
                        </div>
                        <div>
                        <button className='w-full bg-fourth text-white py-2 mt-6'
                        onClick={handleOrder}
                        >Place Order</button>
                        </div>
                            </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Checkout
