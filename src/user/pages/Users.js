import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Jamie Christian',
      image:
        'https://images.pexels.com/photos/4357701/pexels-photo-4357701.jpeg',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
