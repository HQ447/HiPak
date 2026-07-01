import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Form Submitted:", formData);
        // Later: pass this data to API
    };

    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 selection:bg-[#dd3333] selection:text-white">
            {/* Main Card */}
            <div className="w-full max-w-5xl bg-zinc-900 rounded-2xl shadow-xl overflow-hidden border border-zinc-800 flex flex-col md:flex-row">

                {/* Visual Section (Visible on MD screens and up) */}
                <div className="hidden md:flex md:w-1/2 bg-[#dd3333] p-12 flex-col justify-between relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white via-zinc-900 to-black"></div>

                    <Link to="/" className="text-white flex items-center gap-2 text-lg font-regular z-10 self-start hover:opacity-80 transition-opacity">
                        <FaArrowLeft /> مرکزی صفحہ پر واپس جائیں
                    </Link>

                    <div className="z-10 text-right text-white">
                        <h1 className="text-6xl font-regular font-bold mb-4">ہائی پاک</h1>
                        <p className="text-xl font-kasheeda italic opacity-90">جدید دور کا ترجمان۔ غیر جانبدار اور مستند خبریں ہمیشہ سب سے پہلے۔</p>
                    </div>

                    <div className="z-10 text-right text-white/50 text-sm font-regular">
                        © {new Date().getFullYear()} HiPak. جملہ حقوق محفوظ ہیں۔
                    </div>
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-right">
                    {/* Mobile Back Link */}
                    <Link to="/" className="md:hidden text-gray-400 flex items-center justify-end gap-2 text-sm font-regular mb-6 hover:text-white transition-colors">
                        مرکزی صفحہ پر واپس جائیں <FaArrowLeft />
                    </Link>

                    <h2 className="text-3xl font-kasheeda font-bold text-white mb-2">خوش آمدید!</h2>
                    <p className="text-gray-400 font-regular text-base mb-8">اپنے اکاؤنٹ میں لاگ ان کرنے کے لیے معلومات درج کریں۔</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                        {/* Email Input */}
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-300 font-regular text-sm">ای میل ایڈریس</label>
                            <div className="relative w-full">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg pl-4 pr-10 py-3 text-left focus:outline-none focus:border-[#dd3333] transition-all duration-300 text-base"
                                    required
                                />
                                <FaEnvelope className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-500" />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <Link to="/forgot-password" className="text-sm font-regular text-[#dd3333] hover:underline">
                                    پاس ورڈ بھول گئے؟
                                </Link>
                                <label className="text-gray-300 font-regular text-sm">پاس ورڈ</label>
                            </div>
                            <div className="relative w-full">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full bg-zinc-950 border border-zinc-850 text-white rounded-lg pl-10 pr-10 py-3 text-left focus:outline-none focus:border-[#dd3333] transition-all duration-300 text-base"
                                    required
                                />
                                <FaLock className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-500" />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors animate-none"
                                >
                                    {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-[#dd3333] hover:bg-red-700 text-white font-kasheeda font-bold text-lg py-3 rounded-lg mt-3 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30 cursor-pointer"
                        >
                            لاگ ان کریں
                        </button>
                    </form>

                    {/* Signup Links */}
                    <div className="text-center font-regular text-gray-400 mt-8 text-base">
                        اکاؤنٹ نہیں ہے؟{' '}
                        <Link to="/signup" className="text-[#dd3333] hover:underline font-bold">
                            ابھی رجسٹر ہوں
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
