import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: 'تازہ ترین', href: '/category/DailyNews' },
        { name: 'کالمز', href: '/' },
        { name: 'کھیل', href: '/category/sports' },
        { name: 'شوبز', href: '/category/showbiz' },
        { name: 'بلاگز', href: '/category/entertainment' },
        { name: 'ٹیکنالوجی', href: '/category/technology' },
        { name: 'بین الاقوامی', href: '/category/international' },
    ];

    return (
        <nav className="w-full bg-white shadow-md ">
            {/* Header Section with Background Design */}
            <div className="relative overflow-hidden md:py-8 bg-[#dd3333]">


                <div className="container mx-auto px-4 flex items-center justify-between py-1 md:py-6 transition-all duration-300 relative z-10">
                    {/* Left Section (Balanced for centering on mobile) */}
                    <div className="flex-1 flex items-center">
                        {/* Hidden on mobile to keep symmetry with the toggle button on the right */}
                        <div className="md:hidden w-10"></div>

                        {/* Tagline for desktop */}
                        <div className="hidden font-kasheeda md:block text-xl text-white font-medium italic border-l-2 border-red-600 pl-3">
                            جدید دور کا ترجمان
                        </div>
                    </div>

                    {/* Website Name - Centered */}
                    <div className="flex-2 text-center">

                        <Link to="/" className="text-3xl md:text-6xl font-regular text-white hover:scale-105 transition-transform duration-300 cursor-pointer drop-shadow-sm select-none">
                            ہائی پاک
                        </Link>
                    </div>

                    {/* Right Section */}
                    <div className="flex-1 flex justify-end items-center">
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 rounded-full bg-white shadow-sm border border-gray-100 text-gray-700 hover:text-red-600 transition-all duration-200"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        {/* Desktop Date with Status Indicator */}
                        <div className="hidden md:flex items-center font-kasheeda gap-2 text-xl text-white font-medium text-right">
                            {new Date().toLocaleDateString('ur-PK', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navlinks Section - Black on Large Screens */}
            <div
                className={`${isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 md:opacity-100 md:max-h-none py-0'
                    } md:block overflow-hidden transition-all duration-300 ease-in-out md:py-3 bg-gray-50 md:bg-black border-t md:border-t-0`}
            >
                <div className="container mx-auto px-4">
                    <ul className="flex flex-col md:flex-row-reverse md:justify-center items-center gap-4 md:gap-14">
                        {navLinks.map((link, index) => (
                            <li key={index} className="w-full md:w-auto text-center group">
                                <Link
                                    to={link.href}
                                    className="font-regular text-2xl md:text-2xl text-gray-900 md:text-white/90 hover:text-red-600 md:hover:text-red-500 transition-all duration-300 block py-1 md:py-0 relative"
                                >
                                    {link.name}
                                    {/* Animated underline for desktop */}
                                    <span className="hidden md:block absolute -bottom-1 right-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
