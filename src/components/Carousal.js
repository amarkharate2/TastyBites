import React from 'react';

export default function Carousel({ search, onSearch }) {
    return <section className="hero">
        <div>
            <span className="eyebrow">FRESHLY MADE • QUICK BITES</span>
            <h1>Good food.
                <br />Great mood.
            </h1>
            <p>Find your favourite bites and build your perfect meal.</p>
            <label className="search-label">Search menu<input type="search" placeholder="Try pizza, burger, fries…" value={search} onChange={e => onSearch(e.target.value)} /></label>
        </div>
        <div className="hero-art" aria-hidden="true">🍔<span>🍟</span></div></section>;
}
