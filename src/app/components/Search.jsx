import React, { useState } from 'react';

const Search = ({ onSearchLeft, onSearchRight }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isLeftSide, setIsLeftSide] = useState(true);

    const handleSearch = () => {
        if (isLeftSide) {
            onSearchLeft(searchQuery);
        } else {
            onSearchRight(searchQuery);
        }
        setSearchQuery('');
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <button
                onClick={() => setIsLeftSide(!isLeftSide)}
                className={`px-4 py-2 rounded ${isLeftSide ? 'bg-blue-500' : 'bg-gray-300'} text-white`}
            >
                {isLeftSide ? 'A' : 'B'}
            </button>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Select candidate ${isLeftSide ? 'A' : 'B'}`}
                className="flex-grow form-input px-4 py-2 border rounded"
            />
            <button
                onClick={handleSearch}
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
                Search
            </button>
        </div>
    );
};

export default Search;

