import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from "./Request/index";
import { Card, Button } from 'antd';
import { addCart } from '../Redux/userReducer';
import ProductList from './ProductList';

function ListingProducts() {
    const { Meta } = Card;
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.data);//user is store //data is initialState

    useEffect(() => {
        dispatch(fetchApi());
    }, [dispatch]);

    return (
        <>
            <ProductList />
            <section className="w-5/6 mx-auto" id="shop">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 justify-items-center'>
                    {users.products?.map((val, index) => {
                        return (
                            <div key={index}>
                                <Card className='bg-gray-300 transform hover:scale-110 transition duration-700 ease-in-out relative' hoverable style={{ width: 240, textAlign: 'center' }} cover={<img className='w-64 h-48' alt="example" src={val.thumbnail} />}>
                                    <Meta title={val.title} description={val.Categories} />
                                    <Button onClick={() => dispatch(addCart(val))} className='mt-4' type="primary" danger>AddCart</Button>
                                    <span className='absolute top-3 right-3 text-red-500 bg-gray-500 bg-opacity-50 p-0.5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </span>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>

    );
}

export default ListingProducts;
