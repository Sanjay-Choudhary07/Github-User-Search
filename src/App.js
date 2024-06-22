import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center mb-5">GitHub User Search</h1>
      <SearchBar setUsers={setUsers} setTotalCount={setTotalCount} currentPage={currentPage} />
      <UserList users={users} />
    </div>
  );
};

export default App;