import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import news from '../assets/data/newsData.json'

function News() {
    const { id } = useParams();
    const newsItem = news.find((item) => item.id === Number(id));
    const [fontSize, setFontSize] = useState(23);

    const increase = () => setFontSize(prev => Math.min(prev + 2, 28));
    const decrease = () => setFontSize(prev => Math.max(prev - 2, 14));

    return (
        <div className='text-right flex flex-col gap-3'>
            <h1 className='text-3xl md:text-4xl font-kasheeda font-bold'>{newsItem.title}</h1>
            <p className='text-lg md:text-xl font-regular'>{newsItem.date}</p>

            {/* Image + font-size buttons side by side */}
            <div className='flex flex-col gap-2'>
                <img src={newsItem.img} alt={newsItem.title} className='flex-1' />
                {/* + / − buttons on the left */}
                <div className='flex  gap-1 pt-1 shrink-0'>
                    <button
                        onClick={decrease}
                        title='Decrease font size'
                        className='w-6 h-6 flex items-center justify-center rounded-full border border-gray-500 text-gray-500 hover:border-[#dd3333] hover:text-[#dd3333] text-sm font-bold bg-white transition-colors duration-200'
                    >−</button>
                    <button
                        onClick={increase}
                        title='Increase font size'
                        className='w-6 h-6 flex items-center justify-center rounded-full border border-gray-500 text-gray-500 hover:border-[#dd3333] hover:text-[#dd3333] text-sm font-bold bg-white transition-colors duration-200'
                    >+</button>
                </div>

            </div>

            <p className='font-regular leading-relaxed' style={{ fontSize: `${fontSize}px` }}>
                {newsItem.details}
            </p>
        </div>
    )
}

export default News