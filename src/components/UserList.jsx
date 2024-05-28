import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <UserCard key={user.id} userData={user} />
      ))}
    </div>
  );
};

export default UserList;