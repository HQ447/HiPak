import React from 'react'
import { useParams } from 'react-router-dom'
import news from '../assets/data/newsData.json'

function News() {
    const { id } = useParams();
    const newsItem = news.find((item) => item.id === Number(id));
    return (
        <div className='text-right flex flex-col gap-3'>
            <h1 className='text-4xl font-kasheeda font-bold'>{newsItem.title}</h1>
            <p className='text-xl font-regular'>{newsItem.date}</p>
            <img src={newsItem.img} alt="" />
            <p className='text-2xl font-regular'>{newsItem.details}</p>
        </div>
    )
}

export default News