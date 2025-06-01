// import React from 'react'
// import Slider from "react-slick"
// // Import Slick Carousel CSS files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// const Home = () => {
//     const settings = {
//         dots: false,
//         infinite: true,
//         slidesToShow: 1,
//         autoplay: true,
//         speed: 2000,
//         autoplaySpeed: 2000,
//         cssEase: "linear"
//       };
//   return (
//     <div className='bg-ternary mt-2 px-4 md:px-16 lg:px-24'>
//       <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
//         <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
//               <img src='public/eco5.webp' alt='' className='w-full h-full'/>
//               <div className='absolute top-28 left-76'>
//                 <p>Code With MAHAM DURANI</p>
//                 <h2>WELCOME TO OUR ECOHUB WEB APP</h2>
//                 <p>Million + Products</p>
//                 <button>SHOP NOW</button>
//               </div>
//             <div>
//             <div className="slider-container">
//                           <Slider {...settings}>
//                               <div>
//                                   <img src='public/eco.jpg' alt=''></img>
//                               </div>
//                               <div>
//                               <img src='public/eco2.jpg' alt=''></img>
//                               </div>
//                               <div>
//                               <img src='public/eco3.jpg' alt=''></img>
//                               </div>
//                           </Slider>
//                       </div> 
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home

import React, { useEffect } from 'react'
import Slider from "react-slick"
// Import Slick Carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfoSection from '../components/InfoSection';
import CategorySection from '../components/CategorySection';
import { setProducts } from '../redux/productSlice';
import { useDispatch, useSelector,} from 'react-redux';
import { mockData } from '../assets/MockData';
import ProductCard from '../components/ProductCard';
import Shop from './Shop';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Home = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.product)
  axios.defaults.withCredentials = true;
  useEffect(()=>{
    dispatch(setProducts(mockData))
    axios.get("http://localhost:4001/home")
    .then(result => {console.log(result)
      if(result.data !== "success"){
        // openLogin();
      }
    })
    .catch(err => console.log(err))
  },[])
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows:false,
    };

  return (
    <div className="bg-ternary mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
      
        <div className="w-full md:w-4/12 mt-8 md:mt-0 h-96 relative">
          <img src="public/eco5.webp" alt="" className="w-full h-full object-cover rounded-lg shadow-lg mt-2" />
          
          <div className="absolute top-1/4 left-8 md:left-16 text-white space-y-4">
            <p className="text-xl font-semibold">Code With MAHAM DURANI</p>
            <h2 className="text-4xl font-bold">WELCOME TO OUR ECOHUB WEB APP</h2>
            <p className="text-lg">Million + Products</p>
            <button className="mt-4 bg-fourth text-secondary font-semibold py-2 px-6 rounded-full">
              <Link to='/shop'>SHOP NOW</Link>
            </button>
          </div>
        </div>

       
        <div className="w-full md:w-8/12 mt-8 md:mt-0">
          <div className="slider-container">
            <Slider {...settings}>
              
              <div className="flex justify-center items-center p-2">
                <img src="public/ec.jpg" alt="" className="w-full h-100 rounded-lg shadow-md" />
              </div>
             
              <div className="flex justify-center items-center p-2">
                <img src="public/ec1.jfif" alt="" className="w-full h-100 rounded-lg shadow-md" />
              </div>

              <div className="flex justify-center items-center p-2">
                <img src="public/ec2.webp" alt="" className="w-full h-100 rounded-lg shadow-md" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <InfoSection/>
      <CategorySection/>
      <div className='container mx-auto py-12'>
        <h2 className='text-3xl font-bold mb-6 text-center'>TOP PRODUCTS</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
          {products.products.slice(0,5).map(((product)=>(
            <ProductCard product = {product}/>
          )))}
        </div>
      </div>
      <Shop/>
    </div>
  )
}

export default Home

