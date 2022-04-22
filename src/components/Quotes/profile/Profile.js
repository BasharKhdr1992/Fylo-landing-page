import React from 'react';
import './Profile.css';

const Profile = ({ profile }) => {
  return (
    <div className="profile">
      <img src={profile.url} alt={profile.name} />
      <div className="profile-text">
        <p>
          <strong>{profile.name}</strong>
        </p>
        <em>{profile.jobTitle}</em>
      </div>
    </div>
  );
};

export default Profile;
