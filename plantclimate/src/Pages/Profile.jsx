import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  const toggleView = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <div className="profile-container">
      {isRegistered ? (
        <div className="profile">
          <h1>Sign in</h1>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
          <button onClick={toggleView}>Not registered? Register</button>
        </div>
      ) : (
        <div>
          <h1>Register</h1>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button>Register</button>
          <button onClick={toggleView}>Already registered? Sign in</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
