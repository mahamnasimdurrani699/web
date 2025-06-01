import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = ({openLogin}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post("http://localhost:4001/register",{name,email,password})
    .then(result => {console.log(result)
     openLogin();
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-ternary shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
      <form className="mt-4" onSubmit={handleSubmit}>
      <div className="mb-4">
            <label htmlFor="" className="block text-gray-700 font-medium">Name</label>
            <input type="text" className="w-full px-3 py-2 border rounded-md " onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="mb-4">
            <label htmlFor="" className="block text-gray-700 font-medium">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded-md " onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className="mb-4">
            <label htmlFor="" className="block text-gray-700 font-medium">Password</label>
            <input type="password" className="w-full px-3 py-2 border rounded-md " onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
            <button className="w-full bg-fourth text-white font-medium py-2 rounded-md">Sign Up</button>
        </div>
      </form>
      <div className="mt-4 text-center">
        <span className="text-gray-700">Already have an account?</span>
        <button className="ml-2 text-blue-600 hover:underline" onClick={openLogin}>Login</button>
      </div>
    </div>
  )
}

export default Register
