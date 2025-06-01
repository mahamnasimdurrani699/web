import React from 'react'
import { Link} from 'react-router-dom';

const Order = ({ order }) => {

    return (
    <div className=" mx-auto p-6 bg-ternary shadow-lg rounded-lg mt-2">
    <h3 className="text-2xl font-bold text- text-center">Thank You for Your Order!</h3>
    <p className="text-gray-700 text-center mt-2">Your order has been successfully placed.</p>

    <div className="mt-6 border-t pt-4">
      <h3 className="text-xl font-semibold text-gray-800">Order Details</h3>
      <p className="text-gray-600 mt-1">Order Number: <span className="font-medium">{order.orderNumber}</span></p>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Shipping Information</h3>
        <p className="text-gray-600">{order.shippingInformation.address}</p>
        <p className="text-gray-600">{order.shippingInformation.city}</p>
        <p className="text-gray-600">{order.shippingInformation.zip}</p>
      </div>

      <div className="mt-6 border-t pt-4">
        <h3 className="text-lg font-semibold text-gray-800">Product Order</h3>
        <div className="mt-2 space-y-3">
          {order.products.map((product, index) => (
            <div key={index} className="flex justify-between border-b pb-2">
              <p className="text-gray-700">{product.name} × {product.quantity}</p>
              <p className="text-gray-800 font-medium">Rs. {product.price * product.quantity}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-between text-lg font-semibold text-gray-900 border-t pt-4">
        <span>Total Price:</span>
        <span>Rs. {order.totalPrice}</span>
      </div>

      <div className="mt-6 flex justify-center space-x-4">
        <button className="bg-fourth text-white px-4 py-2 rounded-md shadow-md ">
          Order Tracking
        </button>
        <button className="bg-secondary text-white px-4 py-2 rounded-md shadow-md ">
          <Link to='/'>Continue Shopping</Link>
        </button>
      </div>
    </div>
  </div>
    );
  };
  
  export default Order;
  
