import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Tag } from 'lucide-react';

const mockCategories = [
    { id: 1, name: 'DailyNews', nameUrdu: 'تازہ ترین خبریں', posts: 34, color: '#dd3333' },
    { id: 2, name: 'sports', nameUrdu: 'کھیل کی دنیا', posts: 18, color: '#f59e0b' },
    { id: 3, name: 'technology', nameUrdu: 'ٹیکنالوجی اور سائنس', posts: 22, color: '#0ea5e9' },
    { id: 4, name: 'showbiz', nameUrdu: 'شوبز کی دنیا', posts: 15, color: '#8b5cf6' },
    { id: 5, name: 'international', nameUrdu: 'بین الاقوامی خبریں', posts: 27, color: '#10b981' },
    { id: 6, name: 'entertainment', nameUrdu: 'تفریح اور دل چسپی', posts: 12, color: '#f97316' },
];

const Categories = () => {
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({ name: '', nameUrdu: '', color: '#dd3333' });

    return (
        <div className="p-4 md:p-8 flex flex-col gap-6">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Categories Management</h1>
                    <p className="text-gray-500 text-sm mt-1">Organise your content categories</p>
                </div>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#dd3333] hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm w-fit"
                >
                    <Plus size={16} /> New Category
                </button>
            </div>

            {/* Add Category form (toggle) */}
            {showForm && (
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                    <h2 className="font-semibold text-gray-800 mb-4">Add New Category</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-gray-500 font-medium">Slug (English)</label>
                            <input
                                type="text"
                                placeholder="e.g. technology"
                                value={form.name}
                                onChange={e => setForm({ ...form, name: e.target.value })}
                                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#dd3333]/30 focus:border-[#dd3333]"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-gray-500 font-medium">Name (Urdu)</label>
                            <input
                                type="text"
                                placeholder="ٹیکنالوجی"
                                value={form.nameUrdu}
                                onChange={e => setForm({ ...form, nameUrdu: e.target.value })}
                                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#dd3333]/30 focus:border-[#dd3333] text-right"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-gray-500 font-medium">Color</label>
                            <input
                                type="color"
                                value={form.color}
                                onChange={e => setForm({ ...form, color: e.target.value })}
                                className="h-10 w-full border border-gray-200 rounded-lg cursor-pointer"
                            />
                        </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                        <button className="px-4 py-2 bg-[#dd3333] text-white rounded-lg text-sm hover:bg-red-700 transition">Save Category</button>
                        <button onClick={() => setShowForm(false)} className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition">Cancel</button>
                    </div>
                </div>
            )}

            {/* Categories grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {mockCategories.map(cat => (
                    <div key={cat.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl" style={{ backgroundColor: cat.color + '18' }}>
                                    <Tag size={18} style={{ color: cat.color }} />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800 text-sm">{cat.name}</p>
                                    <p className="text-gray-500 text-xs text-right">{cat.nameUrdu}</p>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <button className="p-1.5 rounded-lg text-gray-400 hover:text-amber-600 hover:bg-amber-50 transition-all" title="Edit"><Edit2 size={14} /></button>
                                <button className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all" title="Delete"><Trash2 size={14} /></button>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                            <span className="text-xs text-gray-400">Total posts</span>
                            <span className="text-sm font-bold" style={{ color: cat.color }}>{cat.posts}</span>
                        </div>
                        <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full rounded-full" style={{ width: `${(cat.posts / 40) * 100}%`, backgroundColor: cat.color }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
