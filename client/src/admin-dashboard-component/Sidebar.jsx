import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard, Newspaper, FolderOpen, FileText,
    Settings, UserCog, ChevronLeft, ChevronRight, LogOut, Menu, X
} from 'lucide-react';

const navItems = [
    { label: 'Analytics', icon: LayoutDashboard, path: '/admin' },
    { label: 'Posts', icon: Newspaper, path: '/admin/posts' },
    { label: 'Categories', icon: FolderOpen, path: '/admin/categories' },
    { label: 'Articles', icon: FileText, path: '/admin/articles' },
    { label: 'Site Settings', icon: Settings, path: '/admin/settings' },
    { label: 'Profile', icon: UserCog, path: '/admin/profile' },
];

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    const NavLinks = ({ onClose }) => (
        <>
            {/* Brand */}
            <div className={`flex items-center gap-3 px-4 py-5 border-b border-white/10 ${collapsed ? 'justify-center' : 'justify-between'}`}>
                {!collapsed && (
                    <div>
                        <span className="text-white font-bold text-xl tracking-wide">HiPak</span>
                        <span className="block text-red-300 text-xs font-medium">Admin Panel</span>
                    </div>
                )}
                <button
                    onClick={() => setCollapsed(c => !c)}
                    className="hidden md:flex w-8 h-8 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
                >
                    {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                </button>
                {/* Mobile close button inside drawer */}
                {onClose && (
                    <button onClick={onClose} className="md:hidden p-1 text-white/70 hover:text-white">
                        <X size={20} />
                    </button>
                )}
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-3 py-4 flex flex-col gap-1 overflow-y-auto">
                {navItems.map(({ label, icon: Icon, path }) => (
                    <NavLink
                        key={path}
                        to={path}
                        end={path === '/admin'}
                        onClick={onClose}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                            ${isActive
                                ? 'bg-[#dd3333] text-white shadow-md shadow-red-900/30'
                                : 'text-white/70 hover:bg-white/10 hover:text-white'
                            }
                            ${collapsed ? 'justify-center' : ''}`
                        }
                        title={collapsed ? label : ''}
                    >
                        <Icon size={18} className="shrink-0" />
                        {!collapsed && <span>{label}</span>}
                    </NavLink>
                ))}
            </nav>

            {/* Logout */}
            <div className="px-3 py-4 border-t border-white/10">
                <button
                    onClick={() => navigate('/login')}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/70 hover:bg-red-600/80 hover:text-white transition-all duration-200 ${collapsed ? 'justify-center' : ''}`}
                    title={collapsed ? 'Logout' : ''}
                >
                    <LogOut size={18} className="shrink-0" />
                    {!collapsed && <span>Logout</span>}
                </button>
            </div>
        </>
    );

    return (
        <>
            {/* ── Mobile top bar ── */}
            <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#1a1a2e] text-white sticky top-0 z-30 shadow-md">
                <div>
                    <span className="font-bold text-lg">HiPak</span>
                    <span className="ml-2 text-red-300 text-xs">Admin</span>
                </div>
                <button
                    onClick={() => setMobileOpen(true)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
                    aria-label="Open menu"
                >
                    <Menu size={20} />
                </button>
            </div>

            {/* ── Mobile overlay ── */}
            <div
                className={`md:hidden fixed inset-0 bg-black/60 z-40 transition-opacity duration-300
                    ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMobileOpen(false)}
            />

            {/* ── Mobile drawer ── */}
            <aside
                className={`md:hidden fixed top-0 left-0 h-full w-64 bg-[#1a1a2e] z-50 flex flex-col transform transition-transform duration-300
                    ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <NavLinks onClose={() => setMobileOpen(false)} />
            </aside>

            {/* ── Desktop sidebar ── */}
            <aside
                className={`hidden md:flex flex-col h-screen sticky top-0 bg-[#1a1a2e] transition-all duration-300 shrink-0
                    ${collapsed ? 'w-16' : 'w-56'}`}
            >
                <NavLinks />
            </aside>
        </>
    );
};

export default Sidebar;