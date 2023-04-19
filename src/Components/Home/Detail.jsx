import React from 'react';
import img2 from '../../asset/food2.jpg';
import vid from '../../asset/food.mp4';
import { Link } from 'react-router-dom';

const Detail = () => {
    return (
        <div className='max-w-screen-xl mx-auto mb-40'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={img2} className="w-full" alt=' ' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <video src={vid} className='w-full ' controls></video>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className='mx-4'>
                <div className='flex items-center justify-between'>
                    <p className='text-2xl font-bold text-white my-3'>Food Description:</p>
                    <p className='font-bold text-white text-2xl'>Price - 20$</p>
                </div>
                <p className='text-gray-300'>
                    We are dedicated to addressing food insecurity for homebound seniors and other vulnerable neighbors. We provide food and pantry items to those in need, including thousands of nutritious meals prepared in our onsite kitchen each week.

                    As the lead Meals on Wheels contractor for the East Side of Manhattan from 59th Street to 142nd Street, we deliver seven meals a week to homebound seniors in direct collaboration with partner agencies, including the Carter Burden Center, Union Settlement Association and Roosevelt Island Senior Center.</p>

            </div>
            <div className='text-end mr-8'>
                <Link to="/"><button className='btn btn-secondary bg-blue-700 text-xl rounded-lg capitalize'>Home</button></Link>
            </div>
        </div >
    );
};

export default Detail;