import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Login = ({openSignUp}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:4001/login",{email,password})
    .then(result => {console.log(result.data)
      if(result.data === "success"){
        // toast.success("login successfully");
        toast.success("Login successful! 🎉", { position: "top-right" });
        navigate("/");
      }else {
        toast.error("Invalid credentials", { position: "top-right" });
      }
     
    })
    .catch(err => {
      console.log(err);
      toast.error("Server error, please try again!");
    });
  }
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-ternary shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="" className="block text-gray-700 font-medium">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded-md " onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className="mb-4">
            <label htmlFor="" className="block text-gray-700 font-medium">Password</label>
            <input type="password" className="w-full px-3 py-2 border rounded-md " onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-gray-700">
                <input type="checkbox" className="mr-2"/>
                <span>Remember me</span>
            </label>
            <a href="" className="text-blue-600 hover:underline">Forget Password?</a>
        </div>
        <div>
            <button className="w-full bg-fourth  text-white font-medium py-2 rounded-md " type='submit'>
              Login
            </button>
        </div>
      </form>
      <div className="mt-4 text-center">
        <span className="text-gray-700">Don't have an account?</span>
        <button className="ml-2 text-blue-600 hover:underline" onClick={openSignUp}>Sign Up</button>
      </div>
    </div>
  )
}

export default Login;


