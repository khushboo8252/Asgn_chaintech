import React, { useState, useEffect } from 'react';

const AccountInfo = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(user));
    setIsEditing(false);
    alert('Account updated successfully!');
  };

  return (
    <div className="col-md-6 mx-auto">
      <h2 className="mb-4">Account Information</h2>
      {isEditing ? (
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={user.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4">Save</button>
          <button 
            type="button" 
            className="btn btn-secondary mt-4 ms-2" 
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </form>
      ) : (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Password:</strong> {user.password}</p> 
          <button 
            className="btn btn-warning mt-3"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountInfo;
