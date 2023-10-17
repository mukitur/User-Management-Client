import { Link } from 'react-router-dom';
import swal from 'sweetalert';

/* eslint-disable react/prop-types */
const Users = ({ loadedUsers, users, setUsers }) => {
  // console.log(loadedUsers);
  // console.log(users);
  const handleDeleteUser = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5500/users/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          swal('Ok!', 'Successfully deleted user!', 'success');
          const remaining = users.filter((suser) => suser._id !== _id);
          // console.log(remaining);
          setUsers(remaining);
        }
      });
  };
  return (
    <div>
      <h2 className="text-2xl my-10">Total Users {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>GENDER</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {loadedUsers.map((usr) => (
              <tr key={usr._id}>
                <td>{usr.name}</td>
                <td>{usr.email}</td>
                <td>{usr.gender}</td>
                <td>{usr.status}</td>
                <td className="flex gap-6">
                  <Link to={`/updateUser/${usr._id}`}>
                    {' '}
                    <button className="btn">Edit</button>
                  </Link>
                  <button
                    className="btn"
                    onClick={() => handleDeleteUser(usr._id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
