import React, { useState } from 'react';
import { Globe, Mail, Phone, Clock, Shield, Save, Plus, Trash2, X, UserPlus } from 'lucide-react';

const inputCls = 'border border-gray-200 rounded-lg px-3 py-2.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#dd3333]/30 focus:border-[#dd3333] transition';

const ROLES = ['Super Admin', 'Editor', 'Moderator'];

const SiteSettings = () => {
    const [form, setForm] = useState({
        siteName: 'HiPak - ہائی پاک',
        tagline: 'جدید دور کا ترجمان',
        contactEmail: 'info@hipak.com',
        contactPhone: '+92-300-0000000',
        postsPerPage: '10',
        maintenanceMode: false,
        commentsEnabled: true,
        breakingNewsEnabled: true,
    });

    const [admins, setAdmins] = useState([
        { id: 1, name: 'Admin User', email: 'admin@hipak.com', role: 'Super Admin' },
        { id: 2, name: 'John Editor', email: 'editor@hipak.com', role: 'Editor' },
    ]);
    const [showAddAdmin, setShowAddAdmin] = useState(false);
    const [newAdmin, setNewAdmin] = useState({ name: '', email: '', password: '', role: 'Editor' });
    const [nextAdminId, setNextAdminId] = useState(3);

    const toggle = (key) => setForm(f => ({ ...f, [key]: !f[key] }));

    const saveAdmin = () => {
        if (!newAdmin.name.trim() || !newAdmin.email.trim()) return;
        setAdmins(prev => [...prev, { id: nextAdminId, name: newAdmin.name, email: newAdmin.email, role: newAdmin.role }]);
        setNextAdminId(n => n + 1);
        setNewAdmin({ name: '', email: '', password: '', role: 'Editor' });
        setShowAddAdmin(false);
    };

    const deleteAdmin = (id) => {
        if (admins.length <= 1) return alert('At least one admin must remain.');
        if (window.confirm('Remove this admin?')) setAdmins(prev => prev.filter(a => a.id !== id));
    };

    const Field = ({ label, name, type = 'text', icon: Icon }) => (
        <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1.5">
                {Icon && <Icon size={13} />} {label}
            </label>
            <input type={type} value={form[name]} onChange={e => setForm(f => ({ ...f, [name]: e.target.value }))} className={inputCls} />
        </div>
    );

    const Toggle = ({ label, name, description }) => (
        <div className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
            <div>
                <p className="text-sm font-medium text-gray-800">{label}</p>
                {description && <p className="text-xs text-gray-400 mt-0.5">{description}</p>}
            </div>
            <button
                onClick={() => toggle(name)}
                className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${form[name] ? 'bg-[#dd3333]' : 'bg-gray-200'}`}
            >
                <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${form[name] ? 'translate-x-5' : ''}`} />
            </button>
        </div>
    );

    const roleColor = { 'Super Admin': 'bg-red-50 text-[#dd3333]', 'Editor': 'bg-blue-50 text-blue-600', 'Moderator': 'bg-amber-50 text-amber-600' };

    return (
        <div className="p-4 md:p-8 flex flex-col gap-6">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Site Settings</h1>
                <p className="text-gray-500 text-sm mt-1">Configure your website settings and controls</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* General Info */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col gap-5">
                    <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                        <Globe size={16} className="text-[#dd3333]" /> General Information
                    </h2>
                    <Field label="Site Name" name="siteName" icon={Globe} />
                    <Field label="Tagline (Urdu)" name="tagline" />
                    <Field label="Posts Per Page" name="postsPerPage" type="number" icon={Clock} />
                </div>

                {/* Contact Info */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col gap-5">
                    <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                        <Mail size={16} className="text-[#dd3333]" /> Contact Information
                    </h2>
                    <Field label="Contact Email" name="contactEmail" type="email" icon={Mail} />
                    <Field label="Contact Phone" name="contactPhone" type="tel" icon={Phone} />
                </div>

                {/* Feature Toggles */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 lg:col-span-2">
                    <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <Shield size={16} className="text-[#dd3333]" /> Feature Controls
                    </h2>
                    <Toggle name="maintenanceMode" label="Maintenance Mode" description="Take the site offline for visitors while you work" />
                    <Toggle name="commentsEnabled" label="Comments Enabled" description="Allow readers to post comments on news articles" />
                    <Toggle name="breakingNewsEnabled" label="Breaking News Ticker" description="Show the scrolling breaking news bar at the top" />
                </div>

                {/* Admin Accounts */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 lg:col-span-2">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                            <UserPlus size={16} className="text-[#dd3333]" /> Admin Accounts
                        </h2>
                        <button
                            onClick={() => setShowAddAdmin(v => !v)}
                            className="flex items-center gap-2 px-3 py-2 bg-[#dd3333] hover:bg-red-700 text-white rounded-lg text-xs font-medium transition shadow-sm"
                        >
                            {showAddAdmin ? <X size={14} /> : <Plus size={14} />}
                            {showAddAdmin ? 'Cancel' : 'Add Admin'}
                        </button>
                    </div>

                    {/* Add Admin Form */}
                    {showAddAdmin && (
                        <div className="mb-5 p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <p className="text-sm font-semibold text-gray-700 mb-4">New Admin Account</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Full Name</label>
                                    <input className={inputCls} value={newAdmin.name} onChange={e => setNewAdmin(a => ({ ...a, name: e.target.value }))} placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Email</label>
                                    <input className={inputCls} type="email" value={newAdmin.email} onChange={e => setNewAdmin(a => ({ ...a, email: e.target.value }))} placeholder="admin@hipak.com" />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Password</label>
                                    <input className={inputCls} type="password" value={newAdmin.password} onChange={e => setNewAdmin(a => ({ ...a, password: e.target.value }))} placeholder="••••••••" />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Role</label>
                                    <select className={inputCls} value={newAdmin.role} onChange={e => setNewAdmin(a => ({ ...a, role: e.target.value }))}>
                                        {ROLES.map(r => <option key={r}>{r}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end mt-4">
                                <button onClick={saveAdmin} className="flex items-center gap-2 px-4 py-2 bg-[#dd3333] hover:bg-red-700 text-white rounded-lg text-sm font-medium transition shadow-sm">
                                    <Plus size={14} /> Create Account
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Admins list */}
                    <div className="flex flex-col divide-y divide-gray-50">
                        {admins.map(admin => (
                            <div key={admin.id} className="flex items-center justify-between py-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#dd3333]/10 text-[#dd3333] flex items-center justify-center font-bold text-sm">
                                        {admin.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">{admin.name}</p>
                                        <p className="text-xs text-gray-400">{admin.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${roleColor[admin.role] || 'bg-gray-100 text-gray-600'}`}>
                                        {admin.role}
                                    </span>
                                    {admin.role !== 'Super Admin' && (
                                        <button onClick={() => deleteAdmin(admin.id)} className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all" title="Remove">
                                            <Trash2 size={14} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Save */}
            <div className="flex justify-end">
                <button className="flex items-center gap-2 px-6 py-2.5 bg-[#dd3333] hover:bg-red-700 text-white rounded-lg text-sm font-medium transition shadow-sm">
                    <Save size={15} /> Save Settings
                </button>
            </div>
        </div>
    );
};

export default SiteSettings;
