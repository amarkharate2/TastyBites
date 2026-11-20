import React, { useState } from 'react';
import { useCart, money } from './ContextReducer';
export default function Card({ item }) {
    const [size, setSize] = useState(Object.keys(item.options)[0]);
    const [qty, setQty] = useState(1);
    const [added, setAdded] = useState(false);
    const { add } = useCart();

    return    <article className="food-card">
        <div className="food-art" aria-hidden="true">{item.icon}</div>
        <div className="food-body">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="selectors">
                <label>Size
                    <select value={size} onChange={e => {
                        setSize(e.target.value);
                        setAdded(false);
                    }}>{Object.keys(item.options).map(s => <option key={s}>{s}</option>)}</select>
                </label>
                <label>Quantity
                    <select value={qty} onChange={e => { setQty(Number(e.target.value)); setAdded(false); }}>{[1, 2, 3, 4, 5, 6].map(n => <option key={n}>{n}</option>)}</select>
                </label></div>
            <div className="card-bottom"><strong>{money(item.options[size] * qty)}</strong><button onClick={() => { add(item, size, qty); setAdded(true); }}>Add to cart</button></div>
            <span className="feedback" role="status">{added ? 'Added to cart' : ''}</span>
        </div>
    </article>;
}
