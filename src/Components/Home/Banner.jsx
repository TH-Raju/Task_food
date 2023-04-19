import React from 'react';
import img2 from '../../asset/food2.jpg';
import img3 from '../../asset/food.jpg';
import vid from '../../asset/food.mp4';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full bg-gradient-to-t from-black to-gray-500">
                    <img src={img2} className="w-full mix-blend-overlay object-cover" alt=' ' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute flex transform  left-1/3 right-5 top-2/4'>
                        <p className=' text-2xl md:text-6xl lg:text-7xl font-extrabold text-white'>Food You Want</p>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full bg-gradient-to-t from-black to-gray-500">
                    <video src={vid} className='w-full mix-blend-overlay object-cover' controls></video>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute flex transform  left-1/3 right-5 top-1/2'>
                        <p className=' text-2xl md:text-6xl lg:text-7xl font-extrabold text-white'>Click to see food</p>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full bg-gradient-to-t from-black to-gray-500">
                    <img src={img3} className="w-full mix-blend-overlay object-cover" alt=' ' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute flex transform  left-1/3 right-5 top-1/2'>
                        <p className=' text-2xl md:text-6xl lg:text-7xl font-extrabold text-white'>Food You Want</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;