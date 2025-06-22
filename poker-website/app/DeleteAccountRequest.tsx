'use client'

import React from 'react';

const DeleteAccountRequest: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);
    const [error, setError] = React.useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (!email || !/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        // TODO: Implement API call to process the deletion request
        // await fetch('/api/request-delete', { method: 'POST', body: JSON.stringify({ email }) });
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="delete-account-request">
                <h2 class="mt-4">Data Deletion Requested</h2>
                <p>
                    Thank you! We have received your request to delete your data associated with "Live Poker DB".
                    Our team will process your request and notify you at <b>{email}</b> once it is complete.
                </p>
            </div>
        );
    }

    return (
        <div className="delete-account-request">
            <h2 class="mt-4">Request Data Deletion</h2>
            <p>
                Enter your email address below to request deletion of your account and all associated data for the <b>Live Poker DB</b> mobile app.
            </p>
            <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    class="border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm mt-4 mb-4"
                />
                {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
                <button type="submit" class="bg-black text-white px-4 py-2 rounded">Request Deletion</button>
            </form>
        </div>
    );
};

export default DeleteAccountRequest;