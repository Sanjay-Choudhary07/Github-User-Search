import React from 'react';

const UserCard = ({ userData }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-5">
      <img className="w-32 h-32 rounded-full mx-auto mb-4" src={userData.avatar_url} alt={userData.login} />
      <h2 className="text-2xl font-bold text-center">{userData.login}</h2>
      <div className="text-center mt-4">
        <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          View Profile
        </a>
      </div>
    </div>
  );
};

export default UserCard;