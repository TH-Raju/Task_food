import React from 'react';
import { CgProfile } from "react-icons/cg";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';


// CgProfile
const Cart = () => {
    return (
        <div className='flex justify-around mb-44'>
            <div>
                <select className="select select-bordered w-full max-w-xs text-white">
                    <option disabled selected>Select Your Location</option>
                    <option>Dhaka</option>
                    <option>Feni</option>
                    <option>Chittagong</option>
                </select>
            </div>
            <div>
                <button className="btn btn-secondary bg-blue-700 rounded-xl">25% Discount</button>
            </div>
            <div>
                {/* The button to open modal */}
                <label htmlFor="my-modal-3" > <CgProfile className='h-12 w-12 text-purple-500' /> </label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Select Your Favourite Social Media</h3>
                        <div className='flex mx-auto justify-center items-center gap-6'>
                            <Link to='https://www.facebook.com/' target='__blank'><p className="py-4"><BsFacebook className='h-12 w-12 text-purple-500' /> </p></Link>
                            <Link to='https://www.instagram.com/' target='__blank'><p className="py-4"><AiFillInstagram className='h-14 w-14 text-purple-500' /> </p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;