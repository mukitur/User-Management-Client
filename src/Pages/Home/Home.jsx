import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Users from '../Users/Users';

const Home = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  return (
    <div>
      <h2>Home Page</h2>
      <Users loadedUsers={loadedUsers} users={users} setUsers={setUsers} />
    </div>
  );
};

export default Home;
