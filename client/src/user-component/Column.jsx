import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import colData from '../assets/data/colData.json'

function Column() {
    const { id } = useParams();
    const col = colData.find((item) => item.id === Number(id));
    const [fontSize, setFontSize] = useState(22);

    const increase = () => setFontSize(prev => Math.min(prev + 2, 28));
    const decrease = () => setFontSize(prev => Math.max(prev - 2, 14));

    if (!col) {
        return (
            <div className='text-right py-20 font-kasheeda text-xl text-gray-500'>
                کالم نہیں ملا۔
            </div>
        );
    }

    return (
        <div className='text-right flex flex-col gap-3'>
            <h1 className='text-3xl md:text-4xl font-kasheeda font-bold'>{col.title}</h1>

            {/* Author & Date */}
            <div className='flex justify-end gap-4 text-gray-500 font-regular text-base md:text-lg'>
                <span>{col.date}</span>
                <span>✍ {col.author}</span>
            </div>

            {/* Image + font-size buttons */}
            <div className='flex flex-col gap-2'>
                <img src={col.image} alt={col.title} className='w-full md:w-100 mx-auto rounded-xs' />

                {/* + / − buttons below image */}
                <div className='flex gap-1 pt-1 shrink-0'>
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

            {/* Details with dynamic font size */}
            <p className='font-regular leading-relaxed ' style={{ fontSize: `${fontSize}px` }}>
                {col.details}
            </p>
        </div>
    )
}

export default Column
