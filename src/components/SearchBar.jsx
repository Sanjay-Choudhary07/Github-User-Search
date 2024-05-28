import React, { useState } from 'react';

const SearchBar = ({ setUsers, setTotalCount, currentPage }) => {
  const [username, setUsername] = useState('');

  const handleSearch = async () => {
    if (username) {
      try {
        const response = await fetch(`https://api.github.com/search/users?q=${username}&page=${currentPage}&per_page=10`);
        const data = await response.json();
        setUsers(data.items);
        setTotalCount(data.total_count);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };

  return (
    <div className="flex justify-center mb-5">
      <input
        type="text"
        className="border rounded-l px-4 py-2 w-64"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-r"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;