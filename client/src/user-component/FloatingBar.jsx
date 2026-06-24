import React from 'react'
import newsData from '../assets/data/newsData.json';

function FloatingBar() {
    const news = newsData.map(item => item.title);

    return (
        <div className='px-4 md:px-20 my-4 select-none'>
            <div className='bg-gray-100 flex items-center h-14 relative overflow-hidden rounded-md border border-gray-200 shadow-xs'>
                {/* Label Section (Fixed on the right) */}
                <div className='bg-red-600 text-white h-full flex items-center px-6 font-regular text-xl absolute right-0 z-20 shadow-[-5px_0_15px_rgba(0,0,0,0.1)]'>
                    تازہ ترین
                </div>

                {/* Marquee Wrapper */}
                <div className="flex-1 overflow-hidden h-full flex items-center mr-28">
                    <div className="flex animate-marquee whitespace-nowrap py-4 items-center">
                        {/* First set of items */}
                        {[...news, ...news].map((item, index) => (
                            <div key={index} className="flex items-center gap-4 px-4 flex-row-reverse">
                                <span className='font-regular text-gray-800 text-xl whitespace-nowrap'>
                                    {item}
                                </span>
                                {/* Dot appearing to the right of Urdu text (which is left in LTR layout) */}
                                <span className="h-2 w-2 bg-red-600 rounded-full shrink-0"></span>

                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
                .animate-marquee {
                    display: flex;
                    animation: marquee 30s linear infinite;
                    width: max-content;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    )
}

export default FloatingBar
