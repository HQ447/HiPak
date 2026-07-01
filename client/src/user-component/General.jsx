import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import newsData from '../assets/data/newsData.json';

function General() {
    const { categoryName } = useParams();
    const navigate = useNavigate();

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

    const handleNewsClick = (newsId) => {
        navigate(`/news/${newsId}`);
    };

    // Mapping category names to Urdu display headers
    const categoryNamesUrdu = {
        DailyNews: 'تازہ ترین خبریں',
        sports: 'کھیل کی دنیا',
        technology: 'ٹیکنالوجی اور سائنس',
        showbiz: 'شوبز کی دنیا',
        international: 'بین الاقوامی خبریں',
        entertainment: 'تفریح اور دل چسپی'
    };

    // Filter and sort the news items according to category parameters
    const categoryNews = newsData
        .filter((item) => item.category === categoryName && item.date)
        .sort((a, b) => parseUrduDate(b.date) - parseUrduDate(a.date));

    const urduCategoryHeader = categoryNamesUrdu[categoryName] || categoryName;

    return (
        <div className="w-full">
            <div className="categoryNews flex flex-col gap-6">
                {/* Header with deep red border accent */}
                <h2 className="py-4 px-4 text-right font-kasheeda text-3xl md:text-4xl bg-gray-50 border-r-4 border-[#dd3333] text-gray-900 shadow-xs rounded-sm">
                    کیٹیگری : {urduCategoryHeader}
                </h2>

                {categoryNews.length > 0 ? (
                    <div className="flex flex-col gap-6">
                        {categoryNews.map((item) => (
                            <div
                                onClick={() => handleNewsClick(item.id)}
                                key={item.id}
                                className="flex flex-col-reverse md:flex-row gap-5 p-4 rounded-xl border border-gray-100 hover:border-red-100 hover:shadow-md cursor-pointer transition-all duration-300 w-full"
                            >
                                <div className="flex flex-col justify-between gap-3 w-full text-right">
                                    <div className="flex flex-col gap-2">
                                        <h1 className="font-kasheeda text-2xl md:text-3xl text-gray-950 font-bold hover:text-[#dd3333] transition-colors duration-200 leading-tight">
                                            {item.title}
                                        </h1>
                                        <p className="text-gray-600 font-kasheeda text-lg leading-relaxed line-clamp-3">
                                            {item.details}
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center text-sm font-regular text-gray-500 pt-2 border-t border-gray-50">
                                        <span>رپورٹر: {item.reporter || 'نمائندہ خصوصی'}</span>
                                        <span>{item.date}</span>
                                    </div>
                                </div>
                                <img
                                    className="md:w-60 md:h-44 w-full h-48 object-cover rounded-lg shadow-xs hover:scale-102 transition-transform duration-300"
                                    src={item.img}
                                    alt={item.title}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 border border-dashed border-gray-200 rounded-xl bg-gray-50">
                        <p className="text-xl font-kasheeda text-gray-500">
                            معذرت، اس کیٹیگری میں فی الحال کوئی خبر موجود نہیں ہے۔
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default General;
