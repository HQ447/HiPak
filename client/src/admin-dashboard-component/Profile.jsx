import React, { useState } from 'react';
import { Camera, Save, Lock, User, Mail, Phone } from 'lucide-react';

const Profile = () => {
    const [profile, setProfile] = useState({
        name: 'Admin User',
        nameUrdu: 'ایڈمن',
        email: 'admin@hipak.com',
        phone: '+92-300-0000000',
        role: 'Super Admin',
        bio: 'HiPak News Portal administrator.',
    });

    const [passwords, setPasswords] = useState({ current: '', newPass: '', confirm: '' });

    const Field = ({ label, name, type = 'text', icon: Icon, state, setter }) => (
        <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1.5">
                {Icon && <Icon size={12} />} {label}
            </label>
            <input
                type={type}
                value={state[name]}
                onChange={e => setter(s => ({ ...s, [name]: e.target.value }))}
                className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#dd3333]/30 focus:border-[#dd3333] transition"
            />
        </div>
    );

    return (
        <div className="p-4 md:p-8 flex flex-col gap-6">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Admin Profile</h1>
                <p className="text-gray-500 text-sm mt-1">Edit your personal information and password</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Avatar card */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col items-center gap-4">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full bg-[#dd3333]/10 flex items-center justify-center text-[#dd3333]">
                            <User size={40} />
                        </div>
                        <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#dd3333] text-white rounded-full flex items-center justify-center shadow-md hover:bg-red-700 transition">
                            <Camera size={14} />
                        </button>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold text-gray-800">{profile.name}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{profile.role}</p>
                    </div>
                    <span className="px-3 py-1 bg-red-50 text-[#dd3333] rounded-full text-xs font-semibold">
                        {profile.role}
                    </span>
                </div>

                {/* Profile fields */}
                <div className="lg:col-span-2 flex flex-col gap-6">

                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
                        <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                            <User size={15} className="text-[#dd3333]" /> Personal Information
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Field label="Full Name" name="name" icon={User} state={profile} setter={setProfile} />
                            <Field label="Name (Urdu)" name="nameUrdu" state={profile} setter={setProfile} />
                            <Field label="Email" name="email" type="email" icon={Mail} state={profile} setter={setProfile} />
                            <Field label="Phone" name="phone" type="tel" icon={Phone} state={profile} setter={setProfile} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Bio</label>
                            <textarea
                                rows={3}
                                value={profile.bio}
                                onChange={e => setProfile(p => ({ ...p, bio: e.target.value }))}
                                className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#dd3333]/30 focus:border-[#dd3333] transition resize-none"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-[#dd3333] hover:bg-red-700 text-white rounded-lg text-sm font-medium transition shadow-sm">
                                <Save size={14} /> Save Profile
                            </button>
                        </div>
                    </div>

                    {/* Password */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
                        <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                            <Lock size={15} className="text-[#dd3333]" /> Change Password
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <Field label="Current Password" name="current" type="password" icon={Lock} state={passwords} setter={setPasswords} />
                            <Field label="New Password" name="newPass" type="password" icon={Lock} state={passwords} setter={setPasswords} />
                            <Field label="Confirm Password" name="confirm" type="password" icon={Lock} state={passwords} setter={setPasswords} />
                        </div>
                        <div className="flex justify-end">
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-900 text-white rounded-lg text-sm font-medium transition shadow-sm">
                                <Lock size={14} /> Update Password
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;
