import React, { useState } from 'react';
import '../app/styles/globals.css'
import Head from 'next/head';

export default function Home() {
    // State to hold the search query
    const [searchQuery, setSearchQuery] = useState('');

    // Function to handle search
    const handleSearch = () => {
        // Implement search functionality here
        console.log('Searching for:', searchQuery);
    };
    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>PolitiCompare</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto p-4">
                <h1 className="text-center text-3xl font-bold text-gray-800 my-6">PolitiCompare</h1>

                {/* Search Area */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for a candidate"
                        className="flex-grow form-input px-4 py-2 border rounded"
                    />
                    <button
                        onClick={handleSearch}
                        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                        Search
                    </button>
                </div>

                {/* Candidate Display Sections */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="left-candidate flex-1 p-4 border border-gray-300 rounded shadow">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Left Candidate</h2>
                        {/* Left Candidate Details */}
                    </div>
                    <div className="right-candidate flex-1 p-4 border border-gray-300 rounded shadow">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Right Candidate</h2>
                        {/* Right Candidate Details */}
                    </div>
                </div>
            </main>
        </div>
    );
}
