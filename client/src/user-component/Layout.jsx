import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingBar from './FloatingBar';
import columns from '../assets/data/colData.json';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaTelegramPlane, FaYoutube } from 'react-icons/fa';

const Layout = () => {
    const navigate = useNavigate();
    return (
        <div className="layout">
            <Navbar />
            <FloatingBar />


            <div className='grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 px-2 sm:px-10 md:px-20 '>


                {/* right section */}
                <div className="right col-span-2 order-1 md:order-2">
                    <Outlet />
                </div>




                {/* columns (left) section */}
                <div className="left  order-2 md:order-1 flex flex-col gap-5 md:mt-0 mt-8">
                    <div className="newsArticles flex flex-col gap-5">
                        <h1 className='font-kasheeda text-3xl md:text-4xl text-right bg-gray-200 p-5'>آج کے کالمز</h1>

                        {columns.map((col) => (
                            <div
                                key={col.id}
                                onClick={() => navigate(`/column/${col.id}`)}
                                className="col gap-4 text-xl md:text-2xl flex justify-end items-center text-right font-regular cursor-pointer hover:text-[#dd3333] transition-colors duration-200"
                            >
                                <div className='flex flex-col justify-end'>
                                    <h2 className="title">{col.title}</h2>
                                    <span className="author ">{col.author}</span>
                                </div>
                                <img src={col.image} alt="" className='w-20 h-20' />
                            </div>
                        ))}
                    </div>
                    <div className="socialMediaLinksSection flex flex-col gap-5 mt-5">
                        <h1 className='font-kasheeda text-3xl md:text-4xl text-right bg-gray-200 p-5'>ہمیں فالو کریں</h1>
                        <div className="grid grid-cols-2 gap-3 text-right">
                            {/* Facebook */}
                            <a
                                href="#"
                                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 bg-white hover:border-[#dd3333] hover:text-[#dd3333] transition-all duration-300"
                            >
                                <span className="font-regular text-lg text-gray-700">فیس بک</span>
                                <div className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center">
                                    <FaFacebookF size={18} />
                                </div>
                            </a>
                            {/* Twitter/X */}
                            <a
                                href="#"
                                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 bg-white hover:border-[#dd3333] hover:text-[#dd3333] transition-all duration-300"
                            >
                                <span className="font-regular text-lg text-gray-700">ٹویٹر / X</span>
                                <div className="w-10 h-10 rounded-full bg-[#000000] text-white flex items-center justify-center">
                                    <FaTwitter size={18} />
                                </div>
                            </a>
                            {/* WhatsApp */}
                            <a
                                href="#"
                                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 bg-white hover:border-[#dd3333] hover:text-[#dd3333] transition-all duration-300"
                            >
                                <span className="font-regular text-lg text-gray-700">واٹس ایپ</span>
                                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                                    <FaWhatsapp size={18} />
                                </div>
                            </a>
                            {/* Telegram */}
                            <a
                                href="#"
                                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 bg-white hover:border-[#dd3333] hover:text-[#dd3333] transition-all duration-300"
                            >
                                <span className="font-regular text-lg text-gray-700">ٹیلی گرام</span>
                                <div className="w-10 h-10 rounded-full bg-[#0088cc] text-white flex items-center justify-center">
                                    <FaTelegramPlane size={18} />
                                </div>
                            </a>
                            {/* YouTube */}
                            <a
                                href="#"
                                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 bg-white hover:border-[#dd3333] hover:text-[#dd3333] transition-all duration-300 col-span-2"
                            >
                                <span className="font-regular text-lg text-gray-700">یوٹیوب</span>
                                <div className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center">
                                    <FaYoutube size={18} />
                                </div>
                            </a>
                        </div>
                    </div>

                </div>







            </div>
            <Footer />
        </div>
    );
};

export default Layout;
