import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart, money } from '../components/ContextReducer';

export default function Cart() {
    const { items, update, total, clear } = useCart();
    const [receipt, setReceipt] = useState(null);

    return <main className="container">
        <h1>Your cart</h1>
        {receipt ? <div className="panel" role="status">
            <h2>Demo order placed!</h2>
            <p>Order {receipt.id} · {money(receipt.total)}</p>
            <p>No payment was collected and no food will be delivered.</p><Link to="/">Back to menu</Link>
        </div>
            : items.length ? <>
                <div className="cart-list">{items.map(x => <article className="cart-row" key={x.key}>
                    <span className="cart-icon" aria-hidden="true">{x.icon}</span>
                    <div>
                        <h3>{x.name}</h3>
                        <p>{x.size} · {money(x.price)} each</p
                        ></div>
                    <div className="quantity"><button aria-label={`Decrease ${x.name} ${x.size}`} onClick={() => update(x.key, x.qty - 1)}>−</button>
                        <span>{x.qty}</span>
                        <button aria-label={`Increase ${x.name} ${x.size}`} onClick={() => update(x.key, x.qty + 1)}>+</button>
                    </div>
                    <strong>{money(x.price * x.qty)}</strong>
                    <button className="secondary" onClick={() => update(x.key, 0)}>Remove</button></article>)}</div>
                <section className="panel checkout"><h2>Total: {money(total)}</h2><p>Demo checkout only. No real payment or delivery.</p>
                    <button onClick={() => { setReceipt({ id: Date.now().toString(36).toUpperCase(), total }); clear(); }}>Place demo order</button>
                </section></> : <div className="panel">
                <p>Your cart is empty.</p>
                <Link to="/">Browse menu</Link>
            </div>}
    </main>;
}
