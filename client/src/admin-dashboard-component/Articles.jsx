import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Eye, X, Filter } from 'lucide-react';

const CATEGORIES = ['Technology', 'Sports', 'Showbiz', 'Education', 'DailyNews', 'International', 'Entertainment'];
const STATUSES = ['Published', 'Draft', 'Review'];

const statusStyle = {
    Published: 'bg-emerald-100 text-emerald-700',
    Draft: 'bg-gray-100 text-gray-600',
    Review: 'bg-amber-100 text-amber-700',
};

const emptyArticle = { title: '', author: '', category: 'Technology', status: 'Draft', date: '', details: '' };
const inputCls = 'border border-gray-200 rounded-lg px-3 py-2.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#dd3333]/30 focus:border-[#dd3333] transition';

const Articles = () => {
    const [articles, setArticles] = useState([
        { id: 1, title: 'ڈیجیٹل پاکستان کی جانب ایک اہم قدم', author: 'احمد رضا', category: 'Technology', date: '24 جون 2026', status: 'Published', details: 'پاکستان میں ڈیجیٹل تبدیلی کا عمل تیزی سے آگے بڑھا ہے۔' },
        { id: 2, title: 'کرکٹ صرف کھیل نہیں بلکہ جذبہ ہے', author: 'محمد بلال', category: 'Sports', date: '22 جون 2026', status: 'Published', details: 'پاکستان میں کرکٹ کو محض ایک کھیل نہیں بلکہ ایک جذبہ سمجھا جاتا ہے۔' },
        { id: 3, title: 'سوشل میڈیا کے مثبت اور منفی اثرات', author: 'عائشہ نور', category: 'Technology', date: '20 جون 2026', status: 'Draft', details: 'سوشل میڈیا نے دنیا کو ایک دوسرے کے قریب کر دیا ہے۔' },
        { id: 4, title: 'تعلیم میں سرمایہ کاری کیوں ضروری ہے', author: 'کاشف محمود', category: 'Education', date: '18 جون 2026', status: 'Review', details: 'کسی بھی قوم کی ترقی کا انحصار اس کے تعلیمی نظام پر ہوتا ہے۔' },
        { id: 5, title: 'شوبز انڈسٹری اور نوجوان نسل', author: 'سارہ خان', category: 'Showbiz', date: '16 جون 2026', status: 'Published', details: 'شوبز انڈسٹری معاشرے پر گہرے اثرات مرتب کرتی ہے۔' },
        { id: 6, title: 'مصنوعی ذہانت مستقبل کو کیسے بدل رہی ہے', author: 'وقاص احمد', category: 'Technology', date: '14 جون 2026', status: 'Draft', details: 'مصنوعی ذہانت دنیا بھر میں تیزی سے مقبول ہو رہی ہے۔' },
    ]);

    const [search, setSearch] = useState('');
    const [newModal, setNewModal] = useState(false);
    const [viewItem, setViewItem] = useState(null);
    const [editId, setEditId] = useState(null);
    const [form, setForm] = useState(emptyArticle);
    const [nextId, setNextId] = useState(7);

    const filtered = articles.filter(a =>
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.author.toLowerCase().includes(search.toLowerCase()) ||
        a.category.toLowerCase().includes(search.toLowerCase())
    );

    const openNew = () => { setForm(emptyArticle); setNewModal(true); };
    const openView = (a) => setViewItem(a);
    const openEdit = (a) => { setForm({ ...a }); setEditId(a.id); };
    const closeAll = () => { setNewModal(false); setViewItem(null); setEditId(null); };

    const saveNew = () => {
        if (!form.title.trim()) return;
        setArticles(prev => [...prev, { ...form, id: nextId }]);
        setNextId(n => n + 1);
        closeAll();
    };
    const saveEdit = () => {
        if (!form.title.trim()) return;
        setArticles(prev => prev.map(a => a.id === editId ? { ...form } : a));
        closeAll();
    };
    const deleteItem = (id) => {
        if (window.confirm('Delete this article?')) setArticles(prev => prev.filter(a => a.id !== id));
    };

    const ArticleForm = () => (
        <div className="flex flex-col gap-4">
            <div>
                <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Title (Urdu)</label>
                <input className={inputCls + ' text-right'} value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="مضمون کا عنوان" />
            </div>
            <div>
                <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Author</label>
                <input className={inputCls} value={form.author} onChange={e => setForm(f => ({ ...f, author: e.target.value }))} placeholder="مصنف کا نام" />
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
                <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Article Body (Urdu)</label>
                <textarea rows={5} className={inputCls + ' text-right resize-none'} value={form.details} onChange={e => setForm(f => ({ ...f, details: e.target.value }))} placeholder="مضمون کا متن..." />
            </div>
        </div>
    );

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
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Articles Management</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage columnist articles and opinion pieces</p>
                </div>
                <button onClick={openNew} className="flex items-center gap-2 px-4 py-2.5 bg-[#dd3333] hover:bg-red-700 text-white rounded-lg text-sm font-medium transition shadow-sm w-fit">
                    <Plus size={16} /> New Article
                </button>
            </div>

            {/* Search */}
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Search articles or author..." value={search} onChange={e => setSearch(e.target.value)}
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
                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Author</th>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Category</th>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Status</th>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Date</th>
                                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filtered.map((article, i) => (
                                <tr key={article.id} className="hover:bg-gray-50/50 transition-colors duration-150">
                                    <td className="px-4 py-4 text-gray-400 font-medium">{i + 1}</td>
                                    <td className="px-4 py-4 max-w-[180px]">
                                        <p className="font-medium text-gray-800 text-right truncate">{article.title}</p>
                                    </td>
                                    <td className="px-4 py-4 text-gray-500 hidden md:table-cell">{article.author}</td>
                                    <td className="px-4 py-4 text-gray-500 hidden lg:table-cell">{article.category}</td>
                                    <td className="px-4 py-4 hidden sm:table-cell">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyle[article.status]}`}>{article.status}</span>
                                    </td>
                                    <td className="px-4 py-4 text-gray-500 hidden lg:table-cell text-right">{article.date}</td>
                                    <td className="px-4 py-4">
                                        <div className="flex items-center justify-center gap-1.5">
                                            <button onClick={() => openView(article)} className="p-1.5 rounded-lg text-gray-400 hover:text-sky-600 hover:bg-sky-50 transition-all" title="View"><Eye size={15} /></button>
                                            <button onClick={() => openEdit(article)} className="p-1.5 rounded-lg text-gray-400 hover:text-amber-600 hover:bg-amber-50 transition-all" title="Edit"><Edit2 size={15} /></button>
                                            <button onClick={() => deleteItem(article.id)} className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all" title="Delete"><Trash2 size={15} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {filtered.length === 0 && <div className="py-16 text-center text-gray-400 text-sm">No articles found.</div>}
                </div>
            </div>

            {newModal && <Modal title="New Article" onSave={saveNew} saveLabel="Publish"><ArticleForm /></Modal>}
            {editId && <Modal title="Edit Article" onSave={saveEdit} saveLabel="Update"><ArticleForm /></Modal>}
            {viewItem && (
                <Modal title="Article Details">
                    <div className="flex flex-col gap-4 text-right">
                        <h2 className="font-kasheeda text-2xl font-bold text-gray-900">{viewItem.title}</h2>
                        <div className="flex justify-start gap-3 flex-wrap">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyle[viewItem.status]}`}>{viewItem.status}</span>
                            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">{viewItem.category}</span>
                        </div>
                        <p className="text-sm text-gray-500">✍ {viewItem.author} · {viewItem.date}</p>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{viewItem.details}</p>
                        <div className="flex justify-end mt-2">
                            <button onClick={closeAll} className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition">Close</button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Articles;
