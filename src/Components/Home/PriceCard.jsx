import React from 'react';
import food1 from '../../asset/food.jpg';
import food2 from '../../asset/food2.jpg';
import food3 from '../../asset/food3.jpg';
import food4 from '../../asset/food2.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';


const PriceCard = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='my-28 max-w-screen-xl mx-auto'>
            <Carousel responsive={responsive}>
                <div className='mx-16'>
                    <Link to='/detail'>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={food1} alt="Food" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Toast</h2>
                                <p className='card-title text-sm'>We Provide Best Toast. Try Our Toast now.</p>
                                <div className="card-actions justify-end">
                                    {/* <button className="btn btn-primary">Buy Now</button>
                         */}
                                    <h2 className='text-2xl font-bold'>20$</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='mx-16'>
                    <Link to='/detail'>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={food2} alt="Food" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Burger</h2>
                                <p className='card-title text-sm'>We Provide Best Burger. Try Our Buger now.</p>
                                <div className="card-actions justify-end">
                                    {/* <button className="btn btn-primary">Buy Now</button>
                         */}
                                    <h2 className='text-2xl font-bold'>10$</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='mx-16'>
                    <Link to='/detail'>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={food3} alt="Food" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Toast</h2>
                                <p className='card-title text-sm'>We Provide Best Toast. Try Our Toast now.</p>
                                <div className="card-actions justify-end">
                                    {/* <button className="btn btn-primary">Buy Now</button>
                         */}
                                    <h2 className='text-2xl font-bold'>30$</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='mx-16'>
                    <Link to="/detail">
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={food4} alt="Food" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Burger</h2>
                                <p className='card-title text-sm'>We Provide Best Burger. Try Our Buger now.</p>
                                <div className="card-actions justify-end">
                                    {/* <button className="btn btn-primary">Buy Now</button>
                         */}
                                    <h2 className='text-2xl font-bold'>20$</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='mx-16'>
                    <Link to='/detail'>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={food1} alt="Food" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Slice</h2>
                                <p className='card-title text-sm'>We Provide Best Slice. Try Our Slice now.</p>
                                <div className="card-actions justify-end">
                                    {/* <button className="btn btn-primary">Buy Now</button>
                         */}
                                    <h2 className='text-2xl font-bold'>30$</h2>
                                </div>
                            </div>
                        </div></Link>
                </div>

            </Carousel>


        </div>
    );
};

export default PriceCard;