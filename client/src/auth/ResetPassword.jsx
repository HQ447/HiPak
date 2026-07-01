import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaLock, FaEye, FaEyeSlash, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

const ResetPassword = () => {
    const { token } = useParams(); // later used in api payload
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("پاس ورڈ مطابقت نہیں رکھتے!");
            return;
        }
        console.log("ResetPassword Submitted:", formData, "Token:", token);
        setSubmitted(true);
        // Later: pass this data to API
    };

    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 selection:bg-[#dd3333] selection:text-white">
            {/* Main Card */}
            <div className="w-full max-w-md bg-zinc-900 rounded-2xl shadow-xl overflow-hidden border border-zinc-800 p-8 md:p-10 flex flex-col text-right">

                <h1 className="text-4xl font-regular text-white text-center mb-6">ہائی پاک</h1>

                <h2 className="text-2xl font-kasheeda font-bold text-white mb-2">نیا پاس ورڈ سیٹ کریں</h2>

                {!submitted ? (
                    <>
                        <p className="text-gray-400 font-regular text-base mb-8">اپنے محفوظ اور نئے پاس ورڈ کا انتخاب کریں۔</p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                            {/* Password Input */}
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-300 font-regular text-sm">نیا پاس ورڈ</label>
                                <div className="relative w-full">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg pl-10 pr-10 py-3 text-left focus:outline-none focus:border-[#dd3333] transition-all duration-300 text-base"
                                        required
                                    />
                                    <FaLock className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-500" />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                                    >
                                        {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password Input */}
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-300 font-regular text-sm">پاس ورڈ کی تصدیق کریں</label>
                                <div className="relative w-full">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg pl-10 pr-10 py-3 text-left focus:outline-none focus:border-[#dd3333] transition-all duration-300 text-base"
                                        required
                                    />
                                    <FaLock className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-500" />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                                    >
                                        {showConfirmPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                                    </button>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-[#dd3333] hover:bg-red-700 text-white font-kasheeda font-bold text-lg py-3 rounded-lg mt-3 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30 cursor-pointer"
                            >
                                پاس ورڈ تبدیل کریں
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-6">
                        <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                            <FaCheckCircle size={28} />
                        </div>
                        <p className="text-white text-lg font-kasheeda mb-2">کامیابی!</p>
                        <p className="text-gray-400 text-base font-regular mb-8">آپ کا پاس ورڈ کامیابی کے ساتھ تبدیل کر دیا گیا ہے۔</p>
                    </div>
                )}

                {/* Back to Login */}
                <div className="text-center font-regular text-gray-400 mt-8 border-t border-zinc-800 pt-6">
                    <Link to="/login" className="text-gray-400 hover:text-white flex items-center justify-center gap-2 text-base">
                        لاگ ان کریں <FaArrowLeft />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ResetPassword;
