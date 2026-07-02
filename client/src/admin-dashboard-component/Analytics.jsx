import React from 'react';
import { Newspaper, FolderOpen, FileText, Eye, TrendingUp, Users } from 'lucide-react';

const statCards = [
    { label: 'Total Posts', value: '128', change: '+12 this week', icon: Newspaper, color: 'bg-red-50 text-[#dd3333]' },
    { label: 'Total Categories', value: '6', change: '+1 this month', icon: FolderOpen, color: 'bg-amber-50 text-amber-600' },
    { label: 'Total Articles', value: '43', change: '+5 this week', icon: FileText, color: 'bg-sky-50 text-sky-600' },
    { label: 'Page Views', value: '9.4K', change: '+18% vs last week', icon: Eye, color: 'bg-emerald-50 text-emerald-600' },
];

const recentActivity = [
    { action: 'New post published', time: '2 mins ago', tag: 'Post', tagColor: 'bg-red-100 text-[#dd3333]' },
    { action: 'Category "Sports" updated', time: '15 mins ago', tag: 'Category', tagColor: 'bg-amber-100 text-amber-700' },
    { action: 'Article draft saved', time: '1 hour ago', tag: 'Article', tagColor: 'bg-sky-100 text-sky-700' },
    { action: 'Settings updated', time: '3 hours ago', tag: 'Settings', tagColor: 'bg-gray-100 text-gray-700' },
    { action: 'New post published', time: '5 hours ago', tag: 'Post', tagColor: 'bg-red-100 text-[#dd3333]' },
];

const topPosts = [
    { title: 'ڈیجیٹل پاکستان کی جانب ایک اہم قدم', views: 1840, category: 'Technology' },
    { title: 'کرکٹ صرف کھیل نہیں بلکہ جذبہ ہے', views: 1530, category: 'Sports' },
    { title: 'شوبز انڈسٹری اور نوجوان نسل', views: 1210, category: 'Showbiz' },
    { title: 'مصنوعی ذہانت مستقبل کو کیسے بدل رہی ہے', views: 980, category: 'Technology' },
];

const Analytics = () => {
    return (
        <div className="p-4 md:p-8 flex flex-col gap-8">

            {/* Header */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="text-gray-500 text-sm mt-1">Welcome back, Admin · {new Date().toLocaleDateString('en-PK', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {statCards.map(({ label, value, change, icon: Icon, color }) => (
                    <div key={label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-start gap-4 hover:shadow-md transition-shadow duration-200">
                        <div className={`p-3 rounded-xl ${color}`}>
                            <Icon size={22} />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{value}</p>
                            <p className="text-sm text-gray-500 font-medium">{label}</p>
                            <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
                                <TrendingUp size={11} /> {change}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Recent Activity */}
                <div className="lg:col-span-1 bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                    <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#dd3333] inline-block"></span>
                        Recent Activity
                    </h2>
                    <ul className="flex flex-col gap-3">
                        {recentActivity.map(({ action, time, tag, tagColor }, i) => (
                            <li key={i} className="flex items-start justify-between gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                                <div>
                                    <p className="text-sm text-gray-700">{action}</p>
                                    <p className="text-xs text-gray-400 mt-0.5">{time}</p>
                                </div>
                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${tagColor}`}>{tag}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Top Posts */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                    <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#dd3333] inline-block"></span>
                        Top Performing Posts
                    </h2>
                    <div className="flex flex-col gap-3">
                        {topPosts.map(({ title, views, category }, i) => (
                            <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-150">
                                <span className="text-lg font-bold text-gray-200 w-6 shrink-0">0{i + 1}</span>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-gray-800 font-medium truncate text-right">{title}</p>
                                    <span className="text-xs text-gray-400">{category}</span>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-gray-500 shrink-0">
                                    <Eye size={13} />
                                    <span>{views.toLocaleString()}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Analytics;