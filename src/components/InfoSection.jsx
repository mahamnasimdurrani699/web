

import React from 'react';
import { FaShippingFast, FaHeadset, FaMoneyBillWave, FaLock, FaTag } from 'react-icons/fa'; 

const InfoSection = () => {
    const InfoItem = [
        {
            icon: <FaShippingFast className="text-3xl text-secondary" />,
            title: 'Free Shipping',
            description: 'Get your order Delivered with no extra cost',
        },
        {
            icon: <FaHeadset className="text-3xl text-secondary" />, 
            title: 'Customer Support',
            description: '24/7 Customer support to help you',
        },
        {
            icon: <FaMoneyBillWave className="text-3xl text-secondary" />,
            title: 'Secure Payments',
            description: 'Your payment is processed securely',
        },
        {
            icon: <FaLock className="text-3xl text-secondary" />, 
            title: 'Data Security',
            description: 'Your data is encrypted and safe',
        },
        {
            icon: <FaTag className="text-3xl text-secondary" />,
            title: 'Best Deals',
            description: 'Exclusive discounts and offers just for you',
        },
    ];

    return (
        <div className="bg-ternary pb-8 pt-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 ">
                {InfoItem.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md bg-fourth "
                    >
                        {item.icon}
                        <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                        <p className="mt-2 text-black">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfoSection;

