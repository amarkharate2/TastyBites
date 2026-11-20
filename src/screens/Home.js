import React, { useState } from 'react';
import Card from '../components/Card';
import Carousel from '../components/Carousal';
import { menu } from '../menu';

export default function Home() {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');
    const categories = ['All', ...new Set(menu.map(x => x.category))];
    const selected = menu.filter(x => (category === 'All' || x.category === category) && `${x.name} ${x.description}`.toLowerCase().includes(search.trim().toLowerCase()));

    return <>
        <Carousel search={search} onSearch={setSearch} />
        <main className="container">
            <h2>Explore the menu</h2>
            <div className="filters" aria-label="Filter by category">{categories.map(c => <button key={c} className={c === category ? '' : 'secondary'} aria-pressed={c === category} onClick={() => setCategory(c)}>{c}</button>)}
            </div>
            {selected.length ? <div className="food-grid">{selected.map(item => <Card key={item.id} item={item} />)}
            </div> :
                <p role="status">No matching items. Try another search.</p>}
        </main>
    </>;
}
