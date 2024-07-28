import React from 'react';
import Section from '../../layouts/Section';
import { MdHighQuality, MdPriceChange, MdSentimentSatisfied, MdSupport } from 'react-icons/md';
import { FaShippingFast } from 'react-icons/fa';
import { PiSelectionAllBold } from 'react-icons/pi';
const WhyChooseUs: React.FC = () => {
    return (
        <Section>
            <div className="">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Why Choose KeyHub</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
                    <div className="flex flex-col items-center border shadow border-slate-100 p-3 md:p-6 rounded-md bg-secondary hover:shadow-lg duration-300">
                        {/* <img src="/icons/high-quality.svg" alt="High Quality" className="w-16 h-16 mb-4" /> */}
                        <div className='w-fit border rounded-full p-5 mb-4'>
                            <MdHighQuality size={40} className='text-primary' />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-700">High-Quality Products</h3>
                        <p className="text-center text-gray-600">We offer a wide range of keyboards made from top-notch materials ensuring durability and performance.</p>
                    </div>
                    <div className="flex flex-col items-center border shadow border-slate-100 p-3 md:p-6 rounded-md bg-secondary hover:shadow-lg duration-300">
                        <div className='w-fit border rounded-full p-5 mb-4'>
                            <MdPriceChange size={40} className='text-primary' />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-700">Affordable Prices</h3>
                        <p className="text-center text-gray-600">Get the best value for your money with our competitively priced keyboards without compromising on quality.</p>
                    </div>
                    <div className="flex flex-col items-center border shadow border-slate-100 p-3 md:p-6 rounded-md bg-secondary hover:shadow-lg duration-300">
                        <div className='w-fit border rounded-full p-5 mb-4'>
                            <MdSupport size={40} className='text-primary' />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-700">Excellent Customer Support</h3>
                        <p className="text-center text-gray-600">Our dedicated support team is here to assist you with any inquiries or issues you may have.</p>
                    </div>
                    <div className="flex flex-col items-center border shadow border-slate-100 p-3 md:p-6 rounded-md bg-secondary hover:shadow-lg duration-300">
                        <div className='w-fit border rounded-full p-5 mb-4'>
                            <FaShippingFast size={40} className='text-primary' />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-700">Fast Shipping</h3>
                        <p className="text-center text-gray-600">Enjoy quick and reliable shipping to get your favorite keyboards delivered to your doorstep promptly.</p>
                    </div>
                    <div className="flex flex-col items-center border shadow border-slate-100 p-3 md:p-6 rounded-md bg-secondary hover:shadow-lg duration-300">
                        <div className='w-fit border rounded-full p-5 mb-4'>
                            <PiSelectionAllBold size={40} className='text-primary' />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-700">Wide Selection</h3>
                        <p className="text-center text-gray-600">Choose from a vast selection of keyboards to find the perfect match for your needs and preferences.</p>
                    </div>
                    <div className="flex flex-col items-center border shadow border-slate-100 p-3 md:p-6 rounded-md bg-secondary hover:shadow-lg duration-300">
                        <div className='w-fit border rounded-full p-5 mb-4'>
                            <MdSentimentSatisfied size={40} className='text-primary' />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-700">Satisfaction Guarantee</h3>
                        <p className="text-center text-gray-600">We stand behind our products and services with a satisfaction guarantee to ensure your peace of mind.</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default WhyChooseUs;
