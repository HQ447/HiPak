import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingBar from './FloatingBar';
import columns from '../assets/data/colData.json'

const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <FloatingBar />


            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-5 sm:px-10 md:px-20'>


                {/* right section */}
                <div className="right col-span-2 bg-amber-500 order-1 md:order-2">
                    <Outlet />
                </div>




                {/* columns (left) section */}
                <div className="left  order-2 md:order-1 flex flex-col gap-5">
                    <h1 className='font-kasheeda text-3xl md:text-4xl text-right bg-gray-200 p-5'>آج کے کالمز</h1>
                    {columns.map((col) => (
                        <div key={col.id} className="col gap-4 text-xl md:text-2xl flex justify-end items-center text-right font-regular">
                            <div className='flex flex-col justify-end'>
                                <h2 className="title">{col.title}</h2>
                                <span className="author ">{col.author}</span>
                            </div>
                            <img src={col.image} alt="" className='w-20 h-20' />
                        </div>
                    ))}

                </div>







            </div>
            <Footer />
        </div>
    );
};

export default Layout;
