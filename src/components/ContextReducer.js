import React, { createContext, useContext, useState } from 'react';
const Cart = createContext(null);
export const money = n => `₹${n.toLocaleString('en-IN')}`;
export function CartProvider({ children }) {
    const [items, setItems] = useState(() => { try { const v = JSON.parse(localStorage.getItem('fastfood-cart')); return Array.isArray(v) ? v : []; } catch { return []; } });
    const change = fn => setItems(old => {
        const next = fn(old);
        try { localStorage.setItem('fastfood-cart', JSON.stringify(next)); } catch { } return next;
    });
    const add = (food, size, qty) => change(old => { const key = `${food.id}:${size}`; const found = old.find(x => x.key === key); return found ? old.map(x => x.key === key ? { ...x, qty: x.qty + qty } : x) : [...old, { key, name: food.name, size, qty, price: food.options[size], icon: food.icon }]; });
    const update = (key, qty) => change(old => old.map(x => x.key === key ? { ...x, qty } : x).filter(x => x.qty > 0));
    return <Cart.Provider value={{ items, add, update, clear: () => change(() => []), total: items.reduce((s, x) => s + x.price * x.qty, 0), count: items.reduce((s, x) => s + x.qty, 0) }}>{children}</Cart.Provider>;
}
export const useCart = () => useContext(Cart);
