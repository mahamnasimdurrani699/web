// import React from 'react'

// const Modal = ({isModelOpen,setIsModelOpen}) => {
//     if(!isModelOpen ) return null;
//   return (
//     <div className='fixed inset-0 bg-ternary bg-opacity-75 flex items-center justify-center z-50'>
//       <div className='bg-ternary rounded-lg shadow-lg p-6 w-full max-w-md'>
//         <button>&imes;</button>
//         <div className='absolute top-4 right-4 text-white text-3xl' onClick={()=>setIsModelOpen(false)}>{children}</div>
//       </div>
//     </div>
//   )
// }

// export default Modal
import React from 'react';

const Modal = ({ isModelOpen, setIsModelOpen, children }) => {
  if (!isModelOpen) return null;

  return (
   <div>
     <div className="fixed inset-0 bg-secondary bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-ternary rounded-lg shadow-lg p-6 w-full max-w-md">
        <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setIsModelOpen(false)}>
          &times;
        </button>
        {/* Render the content passed as children */}
        {children}
      </div>
    </div>
   </div>
  );
};

export default Modal;
