import React from 'react'

const categories = [
    {
        img:'/Women.jpg',
        title:"Women",
    },
    {
        img:'/child.jpg',
        title:"Children",
    },
    {
        img:'/Mens.jpg',
        title:"Mens",
    },
];

const CategorySection = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 cursor-pointer gap-6'>
      {categories.map((category,index)=>(
        <div key ={index} className='relative h-96'>
            <img src={category.img} className='w-full h-full object-cover rounded-lg shadow-md'></img>
            <div className='absolute top-20 left-12'>
            <p className='text-xl font-bold'>{category.title}</p>
            <p className='text-xl font-bold'>View All</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default CategorySection
