import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './user-component/Layout';
import Login from './auth/Login';
import ForgotPassword from './auth/ForgotPassword';
import Signup from './auth/Signup';
import ResetPassword from './auth/ResetPassword';
import AdminLayout from './admin-dashboard-component/Layout';
import Analytics from './admin-dashboard-component/Analytics';
import Posts from './admin-dashboard-component/Posts';
import Categories from './admin-dashboard-component/Categories';
import Articles from './admin-dashboard-component/Articles';
import SiteSettings from './admin-dashboard-component/SiteSettings';
import Profile from './admin-dashboard-component/Profile';
import Contact from './user-component/Contact';
import Home from './user-component/Home';
import News from './user-component/News';
import General from './user-component/General';
import Column from './user-component/Column';
import Columns from './user-component/Columns';

const App = () => {
  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news/:id" element={<News />} />
          <Route path="/category/:categoryName" element={<General />} />
          <Route path="/column/:id" element={<Column />} />
          <Route path="/columns" element={<Columns />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/admin" element={<AdminLayout />} >
          <Route index element={<Analytics />} />
          <Route path="posts" element={<Posts />} />
          <Route path="categories" element={<Categories />} />
          <Route path="articles" element={<Articles />} />
          <Route path="settings" element={<SiteSettings />} />
          <Route path="profile" element={<Profile />} />
        </Route>

      </Routes>
    </div>
  );
};

export default App;