// import React from 'react'

// const ChangeAddress = () => {
//   return (
//     <div>
//       <input type='text' placeholder='Enter new Address' className='border mb-4 w-full p-2 border' ></input>
//       <div className='justify-end'>
//         <button className='bg-secondary px-2 py-4 text-white rounded mr-2'>Cancel</button>
//         <button className='bg-secondary px-2 py-4 text-white rounded'>Save Address</button>
//       </div>
//     </div>
//   )
// }

// export default ChangeAddress
import React, { useState } from 'react';

const ChangeAddress = ({setAddress , setIsModelOpen }) => {
    const [newAddress,setNewAddress] = useState("")
    const onClose = () => {
      setAddress(newAddress)
      setIsModelOpen(false)
    }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter new Address"
        className="border mb-4 w-full p-2 "
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex justify-end space-x-2">
        <button className="bg-fourth px-2 py-4 text-white rounded" onClick={() => setIsModelOpen(false)}>Cancel</button>
        <button className="bg-fourth px-2 py-4 text-white rounded" onClick={onClose}>Save Address</button>
      </div>
    </div>
  );
};

export default ChangeAddress;

