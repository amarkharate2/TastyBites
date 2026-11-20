import React, { useState } from 'react';
import './App.css';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Cart from './screens/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './components/ContextReducer';

function App() {
    const [name, setName] = useState(() => {
        try { return localStorage.getItem('fastfood-name') || ''; }
        catch { return ''; }
    });
    function login(value) {
        setName(value);
        try { localStorage.setItem('fastfood-name', value); } catch { }
    }
    return <HashRouter><CartProvider><Navbar name={name} onLogout={() => login('')} />
        <Routes><Route path="/" element={<Home />} /><Route path="/login" element={<Login onLogin={login} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
    </CartProvider>
    </HashRouter>;
}
export default App;
