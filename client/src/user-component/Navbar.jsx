import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Navbar</h1>
            <ul className='flex gap-8 justify-end' >
                <li className='font-regular text-2xl'>بین الاقوامی</li>
                <li className='font-regular text-2xl'>ٹیکنالوجی</li>
                <li className='font-regular text-2xl'>بلاگز</li>
                <li className='font-regular text-2xl'>شوبز</li>
                <li className='font-regular text-2xl'>کھیل</li>
                <li className='font-regular text-2xl'>کالمز</li>
                <li className='font-regular text-2xl'>تازہ ترین</li>
            </ul>
        </nav>
    );
};

export default Navbar;
