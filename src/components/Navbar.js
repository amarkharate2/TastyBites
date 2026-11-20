import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from './ContextReducer';

export default function Navbar({ name, onLogout }) {
    const { count } = useCart();

    return <header className="nav">
        <div className="nav-inner">
            <Link className="brand" to="/">TastyBites
                <span>.</span>
            </Link>
            <nav aria-label="Main navigation">
                <NavLink to="/" end>Menu
                </NavLink>
                <NavLink to="/cart">Cart ({count})
                </NavLink>
                {name ? <>
                    <span className="user-name">Hi, {name}</span>
                    <button className="secondary" onClick={onLogout}>Sign out</button>
                </> :
                    <NavLink to="/login">Sign in
                    </NavLink>}
            </nav>
        </div>
    </header>;
}
