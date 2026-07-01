import React from 'react';
import columns from '../assets/data/colData.json'
import news from '../assets/data/newsData.json'
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

    const handleNewsClick = (newsId) => {
        navigate(`/news/${newsId}`);
    };


    console.log(DailyLatestNews)
    return (
        <div className="home flex flex-col gap-3">
            <div className="cover-news " >
                {coverNews.map((item) => (
                    <div key={item.id} className='relative' onClick={() => handleNewsClick(item.id)}>
                        <h2 className='bg-black py-3 md:py-5 px-3 text-white text-right font-kasheeda text-3xl md:text-5xl'>{item.title}</h2>
                        <img src={item.img} alt="" className='w-full h-full md:h-120 mt-6' />
                        <h1 className='text-right font-regular bg-black text-white py-1 md:py-3 px-3 w-fit absolute bottom-0 left-0'>{item.date}</h1>
                    </div>
                ))}
            </div>
            <br />
            <div className="dailyNews flex gap-3 justify-end flex-wrap ">
                {DailyLatestNews.map((item) => (
                    <div key={item.id} className=' grow basis-[264px] flex flex-col gap-3' onClick={() => handleNewsClick(item.id)}>
                        <img className='w-full  ' src={item.img} alt="" />
                        <h1 className='font-kasheeda text-2xl md:text-2xl text-end'>{item.title}</h1>
                    </div>
                ))}
            </div>

            <div className="sportsNews flex flex-col gap-3  ">

                <h2 className='bg-black py-3 md:py-5 px-3 text-white text-right font-kasheeda text-2xl md:text-3xl'> کھیل</h2>
                {sportsNews.map((item) => (
                    <div key={item.id} className=' flex flex-col flex-col-reverse md:flex-row gap-3 w-full ' onClick={() => handleNewsClick(item.id)}>
                        <div className="flex flex-col gap-3 w-full ">
                            <h1 className='font-kasheeda text-2xl md:text-3xl text-end'>{item.title}</h1>
                            <p className='text-end font-kasheeda text-xl line-clamp-2 text-gray-900'>{item.details}</p>
                            <p className='text-end font-regular'>{item.date}</p>

                        </div>
                        <img className='md:w-50 md:h-50 w-full h-full  ' src={item.img} alt="" />
                    </div>
                ))}
            </div>
            <div className="showbizNews flex flex-col gap-3  ">

                <h2 className='bg-black py-3 md:py-5 px-3 text-white text-right font-kasheeda text-2xl md:text-3xl'> شوبز کی دنیا</h2>
                {showbizNews.map((item) => (
                    <div onClick={() => handleNewsClick(item.id)} key={item.id} className=' flex flex-col flex-col-reverse md:flex-row gap-3 w-full '>
                        <div className="flex flex-col gap-3 w-full ">
                            <h1 className='font-kasheeda text-2xl md:text-3xl text-end'>{item.title}</h1>
                            <p className='text-end font-kasheeda text-xl line-clamp-2 text-gray-900'>{item.details}</p>
                            <p className='text-end font-regular'>{item.date}</p>

                        </div>
                        <img className='md:w-50 md:h-50 w-full h-full  ' src={item.img} alt="" />
                    </div>
                ))}
            </div>
            <div className="internationalNews flex flex-col gap-3  ">

                <h2 className='bg-black py-3 md:py-5 px-3 text-white text-right font-kasheeda text-2xl md:text-3xl'> بین الاقوامی خبریں</h2>
                {internationalNews.map((item) => (
                    <div key={item.id} className=' flex flex-col flex-col-reverse md:flex-row gap-3 w-full ' onClick={() => handleNewsClick(item.id)}   >
                        <div className="flex flex-col gap-3 w-full ">
                            <h1 className='font-kasheeda text-2xl md:text-3xl text-end'>{item.title}</h1>
                            <p className='text-end font-kasheeda text-xl line-clamp-2 text-gray-900'>{item.details}</p>
                            <p className='text-end font-regular'>{item.date}</p>

                        </div>
                        <img className='md:w-50 md:h-50 w-full h-full  ' src={item.img} alt="" />
                    </div>
                ))}
            </div>
            <h1 className='my-20'>Technology Nes</h1>


        </div>
    );
};

export default Home;
