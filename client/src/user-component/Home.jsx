import React from 'react';
import columns from '../assets/data/colData.json'
import news from '../assets/data/newsData.json'

const parseUrduDate = (dateStr) => {
    if (!dateStr) return new Date(0);
    const months = {
        'جنوری': 0, 'فروری': 1, 'مارچ': 2, 'اپریل': 3, 'مئی': 4, 'جون': 5,
        'جولائی': 6, 'اگست': 7, 'ستمبر': 8, 'اکتوبر': 9, 'نومبر': 10, 'دسمبر': 11
    };
    const parts = dateStr.trim().split(/\s+/);
    if (parts.length === 3) {
        const day = parseInt(parts[0], 10);
        const monthName = parts[1];
        const year = parseInt(parts[2], 10);
        const month = months[monthName] !== undefined ? months[monthName] : 0;
        return new Date(year, month, day);
    }
    return new Date(0);
};

const Home = () => {
    const DailyLatestNews = news
        .filter((item) => item.category === 'DailyNews' && item.date && item.cover === false)
        .sort((a, b) => parseUrduDate(b.date) - parseUrduDate(a.date));
    const coverNews = news.filter((item) => item.cover);
    const technologyNews = news.filter((item) => item.category === 'technology').sort((a, b) => parseUrduDate(b.date) - parseUrduDate(a.date)).slice(0, 3);
    const sportsNews = news.filter((item) => item.category === 'sports').sort((a, b) => parseUrduDate(b.date) - parseUrduDate(a.date)).slice(0, 3);
    const internationalNews = news.filter((item) => item.category === 'international').sort((a, b) => parseUrduDate(b.date) - parseUrduDate(a.date)).slice(0, 3);
    const showbizNews = news.filter((item) => item.category === 'showbiz').sort((a, b) => parseUrduDate(b.date) - parseUrduDate(a.date)).slice(0, 3);
    const entertainmentNews = news.filter((item) => item.category === 'entertainment').sort((a, b) => parseUrduDate(b.date) - parseUrduDate(a.date)).slice(0, 3);

    return (
        <div className="home">
            <h1>Home j</h1>
            <div>
                {coverNews.map((item) => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
            <h1 className='my-20'>Technology Nes</h1>


        </div>
    );
};

export default Home;
