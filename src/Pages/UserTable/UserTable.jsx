const UserTable = ({ user }) => {
  const { _id, name, email, gender, status } = user;
  return (
    <div>
      <tr>
        <th>{_id}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{gender}</td>
        <td>{status}</td>
      </tr>
    </div>
  );
};

export default UserTable;
