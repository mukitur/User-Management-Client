import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const AddUsers = () => {
  const handleAdduser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const status = form.status.value;
    const gender = form.gender.value;
    const newUser = { name, email, gender, status };
    // console.log(newUser);

    // send data to the server
    fetch('http://localhost:5500/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal('Great!', 'Successfully added user!', 'success');
          form.reset();
        }
      });
  };
  return (
    <div>
      <h2>
        <Link to="/">All User</Link>
      </h2>
      <h2 className="text-3xl text-center mb-5">Add New Users</h2>
      <form onSubmit={handleAdduser} className=" border p-4 shadow-md">
        <div className="form-control mx-auto md:w-3/4 mt-5">
          <label className="label">
            <span className="label-text"> Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="name"
              placeholder="User Name"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control mx-auto md:w-3/4 mt-5">
          <label className="label">
            <span className="label-text"> Email</span>
          </label>
          <label className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* Gender */}
        <div className="form-control mx-auto md:w-3/4 mt-5">
          <div className="form-control md:w-1/2 ">
            <select
              name="gender"
              className="select border border-gray-300 w-full max-w-xs"
            >
              <option disabled selected>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        {/* Status */}
        <div className="form-control mx-auto md:w-3/4">
          <div className="form-control md:w-1/2  my-6">
            <select
              name="status"
              className="select border border-gray-300 w-full max-w-xs"
            >
              <option disabled selected>
                Status
              </option>
              <option defaultValue="Active">Active</option>
              <option defaultValue="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        {/* submit button */}
        <div className="w-3/4 mx-auto justify-evenly my-6">
          <input type="submit" value="save" className="btn btn-block" />
        </div>
      </form>
    </div>
  );
};

export default AddUsers;
