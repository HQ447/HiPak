import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaArrowUp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full bg-[#111111] text-gray-300 relative border-t-4 border-[#dd3333] pt-16 pb-8 select-none mt-12">
            <div className="container mx-auto px-4 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-12 text-right">

                {/* NewsLetter / Subscribe Column */}
                <div className="flex flex-col gap-4 order-4 md:order-1 items-end">
                    <h3 className="text-xl font-bold font-kasheeda text-white relative after:content-[''] after:block after:w-12 after:h-1 after:bg-[#dd3333] after:mt-2 after:ml-auto">
                        خبرنامہ کی سبسکرپشن
                    </h3>
                    <p className="font-regular text-base text-gray-400 mt-2 leading-relaxed">
                        ملک و بیرون ملک کی تازہ ترین خبریں اپنے ای میل ان باکس میں حاصل کریں۔
                    </p>
                    <form className="w-full flex flex-col gap-3 mt-2" onSubmit={(e) => e.preventDefault()}>
                        <div className="relative w-full">
                            <input
                                type="email"
                                placeholder="اپنا ای میل درج کریں..."
                                className="w-full bg-[#1c1c1c] border border-zinc-800 text-white rounded-lg px-4 py-3 text-right focus:outline-none focus:border-[#dd3333] transition-all duration-300 pr-10 text-base"
                                required
                            />
                            <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-500" />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#dd3333] hover:bg-red-700 text-white font-kasheeda font-bold text-lg py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30 cursor-pointer"
                        >
                            سبسکرائب کریں
                        </button>
                    </form>
                </div>

                {/* Quick Links Column */}
                <div className="flex flex-col gap-4 order-3 md:order-2">
                    <h3 className="text-xl font-bold font-kasheeda text-white relative after:content-[''] after:block after:w-12 after:h-1 after:bg-[#dd3333] after:mt-2 after:ml-auto">
                        اہم روابط
                    </h3>
                    <ul className="flex flex-col gap-3 mt-2 text-base font-regular">
                        <li>
                            <Link to="/category/DailyNews" className="hover:text-white hover:mr-2 transition-all duration-300 text-gray-400">تازہ ترین خبریں</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-white hover:mr-2 transition-all duration-300 text-gray-400">آج کے کالمز</Link>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white hover:mr-2 transition-all duration-300 text-gray-400">ہمارے بارے میں</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white hover:mr-2 transition-all duration-300 text-gray-400">رابطہ کریں</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white hover:mr-2 transition-all duration-300 text-gray-400">پرائیویسی پالیسی</a>
                        </li>
                    </ul>
                </div>

                {/* Categories Column */}
                <div className="flex flex-col gap-4 order-2 md:order-3">
                    <h3 className="text-xl font-bold font-kasheeda text-white relative after:content-[''] after:block after:w-12 after:h-1 after:bg-[#dd3333] after:mt-2 after:ml-auto">
                        اہم زمرہ جات
                    </h3>
                    <ul className="flex flex-col gap-3 mt-2 text-base font-regular">
                        <li>
                            <Link to="/category/technology" className="hover:text-white hover:mr-2 transition-all duration-300 text-gray-400">ٹیکنالوجی</Link>
                        </li>
                        <li>
                            <Link to="/category/sports" className="hover:text-white hover:mr-2 transition-all duration-300 text-gray-400">کھیل کی دنیا</Link>
                        </li>
                        <li>
                            <Link to="/category/showbiz" className="hover:text-white hover:mr-2 transition-all duration-300 text-gray-400">شوبز اور سینما</Link>
                        </li>
                        <li>
                            <Link to="/category/international" className="hover:text-white hover:mr-2 transition-all duration-300 text-gray-400">بین الاقوامی خبریں</Link>
                        </li>
                        <li>
                            <Link to="/category/entertainment" className="hover:text-white hover:mr-2 transition-all duration-300 text-gray-400">بلاگز اور تبصرے</Link>
                        </li>
                    </ul>
                </div>

                {/* About & Branding Column */}
                <div className="flex flex-col gap-4 items-end order-1 md:order-4">
                    <h2 className="text-4xl md:text-5xl font-regular text-white hover:scale-105 transition-all duration-300 cursor-pointer select-none">
                        ہائی پاک <span className="text-[#dd3333]">۔</span>
                    </h2>
                    <span className="font-kasheeda text-base text-[#dd3333] italic font-medium mt-1">
                        جدید دور کا ترجمان
                    </span>
                    <p className="font-regular text-base text-gray-400 mt-2 leading-relaxed">
                        ہائی پاک پاکستان کا ابھرتا ہوا اردو نیوز اور بلاگ پورٹل ہے جو قارئین کو دنیا بھر کی مستند اور غیر جانبدار معلومات سے باخبر رکھتا ہے۔
                    </p>
                    {/* Social Media Links */}
                    <div className="flex gap-4 mt-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-[#1c1c1c] border border-zinc-800 hover:bg-[#dd3333] text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/20">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#1c1c1c] border border-zinc-800 hover:bg-[#dd3333] text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/20">
                            <FaTwitter size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#1c1c1c] border border-zinc-800 hover:bg-[#dd3333] text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/20">
                            <FaInstagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#1c1c1c] border border-zinc-800 hover:bg-[#dd3333] text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/20">
                            <FaYoutube size={18} />
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Copyright & Terms Section */}
            <div className="container mx-auto px-4 md:px-20 mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Scroll To Top Button */}
                <button
                    onClick={scrollToTop}
                    className="w-12 h-12 rounded-full border border-zinc-800 hover:bg-[#dd3333] hover:border-[#dd3333] text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 cursor-pointer focus:outline-none"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp size={16} />
                </button>

                {/* Legal links */}
                <div className="flex gap-6 text-sm text-gray-500 font-regular">
                    <a href="#" className="hover:text-white transition-all duration-200">شرائط و ضوابط</a>
                    <a href="#" className="hover:text-white transition-all duration-200">سیکیورٹی اور پرائیویسی</a>
                </div>

                {/* Copyright info */}
                <p className="text-sm font-regular text-gray-500 mt-2 text-center md:text-right">
                    کاپی رائٹ &copy; {new Date().getFullYear()} ہائی پاک۔ جملہ حقوق محفوظ ہیں۔
                </p>

            </div>
        </footer>
    );
};

export default Footer;
