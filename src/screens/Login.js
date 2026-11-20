import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ onLogin }) {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    return <main className="container">

        <form className="panel" onSubmit={e => {
            e.preventDefault();
            if (name.trim()) {
                onLogin(name.trim());
                navigate('/');
            }
        }}>
            <h1>Welcome!</h1>
            <p>Enter a display name to try the demo. This is not secure authentication.</p>
            <label>Your name<input required maxLength={60} value={name} onChange={e => setName(e.target.value)} autoComplete="nickname" />
            </label><button disabled={!name.trim()}>Continue</button>
        </form>
    </main>;
}
