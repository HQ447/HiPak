import React from 'react';
import { useNavigate } from 'react-router-dom';
import colData from '../assets/data/colData.json';

// Parse Urdu date string into a JS Date for sorting
const parseUrduDate = (dateStr) => {
    if (!dateStr) return new Date(0);
    const months = {
        'جنوری': 0, 'فروری': 1, 'مارچ': 2, 'اپریل': 3, 'مئی': 4, 'جون': 5,
        'جولائی': 6, 'اگست': 7, 'ستمبر': 8, 'اکتوبر': 9, 'نومبر': 10, 'دسمبر': 11
    };
    const parts = dateStr.trim().split(/\s+/);
    if (parts.length === 3) {
        const day = parseInt(parts[0], 10);
        const month = months[parts[1]] !== undefined ? months[parts[1]] : 0;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
    return new Date(0);
};

function Columns() {
    const navigate = useNavigate();

    const sortedCols = [...colData].sort(
        (a, b) => parseUrduDate(b.date) - parseUrduDate(a.date)
    );

    return (
        <div className="w-full">
            <div className="flex flex-col gap-6">

                {/* Page header */}
                <h2 className="py-4 px-4 text-right font-kasheeda text-3xl md:text-4xl bg-gray-50 border-r-4 border-[#dd3333] text-gray-900 shadow-xs rounded-sm">
                    آج کے کالمز
                </h2>

                {sortedCols.length > 0 ? (
                    <div className="flex flex-col gap-6">
                        {sortedCols.map((col) => (
                            <div
                                key={col.id}
                                onClick={() => navigate(`/column/${col.id}`)}
                                className="flex flex-col-reverse md:flex-row gap-5 p-4 rounded-xl border border-gray-100 hover:border-red-100 hover:shadow-md cursor-pointer transition-all duration-300 w-full"
                            >
                                {/* Text section */}
                                <div className="flex flex-col justify-between gap-3 w-full text-right">
                                    <div className="flex flex-col gap-2">
                                        <h1 className="font-kasheeda text-2xl md:text-3xl text-gray-950 font-bold hover:text-[#dd3333] transition-colors duration-200 leading-tight">
                                            {col.title}
                                        </h1>
                                        <p className="text-gray-600 font-kasheeda text-lg leading-relaxed line-clamp-3">
                                            {col.details}
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center text-sm font-regular text-gray-500 pt-2 border-t border-gray-50">
                                        <span>✍ {col.author}</span>
                                        <span>{col.date}</span>
                                    </div>
                                </div>

                                {/* Author image */}
                                <img
                                    className="md:w-36 md:h-36 w-full h-48 object-cover rounded-xs md:rounded-lg shadow-xs hover:scale-102 transition-transform duration-300"
                                    src={col.image}
                                    alt={col.author}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 border border-dashed border-gray-200 rounded-xl bg-gray-50">
                        <p className="text-xl font-kasheeda text-gray-500">
                            معذرت، فی الحال کوئی کالم موجود نہیں ہے۔
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Columns;
