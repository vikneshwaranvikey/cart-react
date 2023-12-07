import React, { useState } from 'react'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { setData } from "../../Redux/userReducer"
import { Link } from 'react-router-dom';
function Navbars() {
    const dispatch = useDispatch();

    const [click, setClick] = useState(false);

    const menuClick = () => {
        console.log("menuclick");
        setClick(!click)
    }
    return (
        <nav className='m-5'>
            <div className='md:flex justify-between max-w-7xl mx-auto'>
                <div className='flex justify-between'>
                    <div className='font-black mr-8'>
                        <span className='text-pink-500 font-bold text-3xl'>M</span>
                        <span className='font-bold text-3xl'>oBoo</span>
                        <span className='text-pink-500 font-bold text-3xl'>M</span>
                    </div>
                    <div className='md:hidden mt-2'>
                        <button onClick={menuClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='md:flex space-x-28'>
                    <div className={`md:block${click ? "block" : "hidden"}`} >
                        <Input className='font-bold text-base mx-auto w-96 h-10' onChange={(event) => dispatch(setData(event.target.value))} suffix={<SearchOutlined className='text-red-500 text-xl' />} placeholder="What do you want to buy today?" />
                    </div>
                    <div className={`flex md:block justify-end ${click ? "block" : "hidden"} mt-2`}>
                        <ul className='md:flex md:space-x-8 space-y-4 md:space-y-0 font-semibold'>
                            <li><Link to='/'>Home</Link></li>
                            <li>Account</li>
                            <li>WishList</li>
                            <li >Basket</li>
                            <li ><Link to="/AddCart"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbars;


