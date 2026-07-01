import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './user-component/Layout';
import Login from './auth/Login';
import ForgotPassword from './auth/ForgotPassword';
import AdminLayout from './admin-dashboard-component/Layout';
import Analytics from './admin-dashboard-component/Analytics';
import Contact from './user-component/Contact';
import Home from './user-component/Home';
import News from './user-component/News';
import General from './user-component/General';

const App = () => {
  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news/:id" element={<News />} />
          <Route path="/category/:categoryName" element={<General />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/admin" element={<AdminLayout />} >
          <Route index element={<Analytics />} />
        </Route>

      </Routes>
    </div>
  );
};

export default App;