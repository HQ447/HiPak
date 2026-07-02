import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Eye, X, Filter } from 'lucide-react';

const CATEGORIES = ['Technology', 'Sports', 'Showbiz', 'Education', 'DailyNews', 'International', 'Entertainment'];
const STATUSES = ['Published', 'Draft', 'Review'];

const statusStyle = {
    Published: 'bg-emerald-100 text-emerald-700',
    Draft: 'bg-gray-100 text-gray-600',
    Review: 'bg-amber-100 text-amber-700',
};

const emptyPost = { title: '', category: 'Technology', status: 'Draft', date: '', views: 0, details: '' };

const inputCls = 'border border-gray-200 rounded-lg px-3 py-2.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#dd3333]/30 focus:border-[#dd3333] transition';

const Posts = () => {
    const [posts, setPosts] = useState([
        { id: 1, title: 'ڈیجیٹل پاکستان کی جانب ایک اہم قدم', category: 'Technology', status: 'Published', date: '24 جون 2026', views: 1840, details: 'پاکستان میں ڈیجیٹل تبدیلی کا عمل تیزی سے آگے بڑھا ہے۔' },
        { id: 2, title: 'کرکٹ صرف کھیل نہیں بلکہ جذبہ ہے', category: 'Sports', status: 'Published', date: '22 جون 2026', views: 1530, details: 'پاکستان میں کرکٹ کو محض ایک کھیل نہیں بلکہ ایک جذبے کے طور پر دیکھا جاتا ہے۔' },
        { id: 3, title: 'شوبز انڈسٹری اور نوجوان نسل', category: 'Showbiz', status: 'Draft', date: '20 جون 2026', views: 0, details: 'شوبز انڈسٹری معاشرے پر گہرے اثرات مرتب کرتی ہے۔' },
        { id: 4, title: 'تعلیم میں سرمایہ کاری کیوں ضروری ہے', category: 'Education', status: 'Published', date: '18 جون 2026', views: 980, details: 'کسی بھی قوم کی ترقی کا انحصار اس کے تعلیمی نظام پر ہوتا ہے۔' },
        { id: 5, title: 'مصنوعی ذہانت مستقبل کو کیسے بدل رہی ہے', category: 'Technology', status: 'Review', date: '14 جون 2026', views: 0, details: 'مصنوعی ذہانت دنیا بھر میں تیزی سے مقبول ہو رہی ہے۔' },
    ]);

    const [search, setSearch] = useState('');
    const [newModal, setNewModal] = useState(false);
    const [viewPost, setViewPost] = useState(null);
    const [editPost, setEditPost] = useState(null);
    const [form, setForm] = useState(emptyPost);
    const [nextId, setNextId] = useState(6);

    const filtered = posts.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
    );

    /* ── helpers ─── */
    const openNew = () => { setForm(emptyPost); setNewModal(true); };
    const openView = (p) => setViewPost(p);
    const openEdit = (p) => { setForm({ ...p }); setEditPost(p.id); };
    const closeAll = () => { setNewModal(false); setViewPost(null); setEditPost(null); };

    const saveNew = () => {
        if (!form.title.trim()) return;
        setPosts(prev => [...prev, { ...form, id: nextId, views: 0 }]);
        setNextId(n => n + 1);
        closeAll();
    };

    const saveEdit = () => {
        if (!form.title.trim()) return;
        setPosts(prev => prev.map(p => p.id === editPost ? { ...form } : p));
        closeAll();
    };

    const deletePost = (id) => {
        if (window.confirm('Delete this post?')) setPosts(prev => prev.filter(p => p.id !== id));
    };

    /* ── shared form fields ─── */
    const PostForm = () => (
        <div className="flex flex-col gap-4">
            <div>
                <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Title (Urdu)</label>
                <input className={inputCls + ' text-right'} value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="خبر کا عنوان" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Category</label>
                    <select className={inputCls} value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
                        {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                    </select>
                </div>
                <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Status</label>
                    <select className={inputCls} value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}>
                        {STATUSES.map(s => <option key={s}>{s}</option>)}
                    </select>
                </div>
            </div>
            <div>
                <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Date</label>
                <input className={inputCls} value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} placeholder="e.g. 24 جون 2026" />
            </div>
            <div>
                <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Details (Urdu)</label>
                <textarea rows={5} className={inputCls + ' text-right resize-none'} value={form.details} onChange={e => setForm(f => ({ ...f, details: e.target.value }))} placeholder="خبر کی تفصیل..." />
            </div>
        </div>
    );

    /* ── modal wrapper ─── */
    const Modal = ({ title, children, onSave, saveLabel = 'Save' }) => (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-900 text-lg">{title}</h2>
                    <button onClick={closeAll} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400"><X size={18} /></button>
                </div>
                <div className="overflow-y-auto px-6 py-5 flex-1">{children}</div>
                {onSave && (
                    <div className="px-6 py-4 border-t border-gray-100 flex gap-3 justify-end">
                        <button onClick={closeAll} className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition">Cancel</button>
                        <button onClick={onSave} className="px-4 py-2 bg-[#dd3333] hover:bg-red-700 text-white rounded-lg text-sm font-medium transition shadow-sm">{saveLabel}</button>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="p-4 md:p-8 flex flex-col gap-6">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Posts Management</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage all your news posts</p>
                </div>
                <button onClick={openNew} className="flex items-center gap-2 px-4 py-2.5 bg-[#dd3333] hover:bg-red-700 text-white rounded-lg text-sm font-medium transition shadow-sm w-fit">
                    <Plus size={16} /> New Post
                </button>
            </div>

            {/* Search */}
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Search posts..." value={search} onChange={e => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#dd3333]/30 focus:border-[#dd3333]" />
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition w-fit">
                    <Filter size={15} /> Filter
                </button>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">#</th>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</th>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Category</th>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Status</th>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Date</th>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Views</th>
                                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filtered.map((post, i) => (
                                <tr key={post.id} className="hover:bg-gray-50/50 transition-colors duration-150">
                                    <td className="px-4 py-4 text-gray-400 font-medium">{i + 1}</td>
                                    <td className="px-4 py-4 max-w-[180px]">
                                        <p className="font-medium text-gray-800 text-right truncate">{post.title}</p>
                                    </td>
                                    <td className="px-4 py-4 text-gray-500 hidden md:table-cell">{post.category}</td>
                                    <td className="px-4 py-4 hidden sm:table-cell">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyle[post.status]}`}>{post.status}</span>
                                    </td>
                                    <td className="px-4 py-4 text-gray-500 hidden lg:table-cell text-right">{post.date}</td>
                                    <td className="px-4 py-4 text-gray-500 hidden lg:table-cell">{post.views.toLocaleString()}</td>
                                    <td className="px-4 py-4">
                                        <div className="flex items-center justify-center gap-1.5">
                                            <button onClick={() => openView(post)} className="p-1.5 rounded-lg text-gray-400 hover:text-sky-600 hover:bg-sky-50 transition-all" title="View"><Eye size={15} /></button>
                                            <button onClick={() => openEdit(post)} className="p-1.5 rounded-lg text-gray-400 hover:text-amber-600 hover:bg-amber-50 transition-all" title="Edit"><Edit2 size={15} /></button>
                                            <button onClick={() => deletePost(post.id)} className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all" title="Delete"><Trash2 size={15} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {filtered.length === 0 && <div className="py-16 text-center text-gray-400 text-sm">No posts found.</div>}
                </div>
            </div>

            {/* ── New Post Modal ── */}
            {newModal && (
                <Modal title="New Post" onSave={saveNew} saveLabel="Publish">
                    <PostForm />
                </Modal>
            )}

            {/* ── Edit Modal ── */}
            {editPost && (
                <Modal title="Edit Post" onSave={saveEdit} saveLabel="Update">
                    <PostForm />
                </Modal>
            )}

            {/* ── View Modal ── */}
            {viewPost && (
                <Modal title="Post Details">
                    <div className="flex flex-col gap-4 text-right">
                        <h2 className="font-kasheeda text-2xl font-bold text-gray-900">{viewPost.title}</h2>
                        <div className="flex justify-start gap-3 flex-wrap">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyle[viewPost.status]}`}>{viewPost.status}</span>
                            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">{viewPost.category}</span>
                        </div>
                        <p className="text-sm text-gray-500">{viewPost.date} · {viewPost.views.toLocaleString()} views</p>
                        <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">{viewPost.details}</p>
                        <div className="flex justify-end mt-2">
                            <button onClick={closeAll} className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition">Close</button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Posts;
