import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("ForgotPassword Form Submitted for email:", email);
        setSubmitted(true);
        // Later: pass this data to API
    };

    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 selection:bg-[#dd3333] selection:text-white">
            {/* Main Card */}
            <div className="w-full max-w-md bg-zinc-900 rounded-2xl shadow-xl overflow-hidden border border-zinc-800 p-8 md:p-10 flex flex-col text-right">

                <h1 className="text-4xl font-regular text-white text-center mb-6">ہائی پاک</h1>

                <h2 className="text-2xl font-kasheeda font-bold text-white mb-2">پاس ورڈ بھول گئے؟</h2>

                {!submitted ? (
                    <>
                        <p className="text-gray-400 font-regular text-base mb-8">اپنے رجسٹرڈ ای میل ایڈریس کو درج کریں۔ ہم ایک ری سیٹ لنک ارسال کریں گے۔</p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                            {/* Email Input */}
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-300 font-regular text-sm">ای میل ایڈریس</label>
                                <div className="relative w-full">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg pl-4 pr-10 py-3 text-left focus:outline-none focus:border-[#dd3333] transition-all duration-300 text-base"
                                        required
                                    />
                                    <FaEnvelope className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-500" />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-[#dd3333] hover:bg-red-700 text-white font-kasheeda font-bold text-lg py-3 rounded-lg mt-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30 cursor-pointer"
                            >
                                ری سیٹ لنک حاصل کریں
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-6">
                        <div className="w-16 h-16 bg-[#dd3333]/15 text-[#dd3333] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#dd3333]/30">
                            <FaEnvelope size={24} />
                        </div>
                        <p className="text-white text-lg font-kasheeda mb-2">ای میل روانہ کر دی گئی ہے!</p>
                        <p className="text-gray-400 text-base font-regular mb-8">اگر یہ ای میل اکاؤنٹ رجسٹر ہے، تو آپ کو پاس ورڈ تبدیل کرنے کا لنک موصول ہو جائے گا۔</p>
                    </div>
                )}

                {/* Back to Login */}
                <div className="text-center font-regular text-gray-400 mt-8 border-t border-zinc-800 pt-6">
                    <Link to="/login" className="text-gray-400 hover:text-white flex items-center justify-center gap-2 text-base">
                        لاگ ان پر واپس جائیں <FaArrowLeft />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ForgotPassword;
