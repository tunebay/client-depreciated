import React from 'react';
import '../../../styles/components/profile/profile-user.scss';

const ProfileUser = ({ user, loading }) => {
  if (loading) {
    console.log('loading...');
    return <div className="profile-user" />;
  }
  return (
    <div className="profile-user">
      <div className="profile-picture-placeholder" />
      <div className="user-details">
        <div id="display-name">{user.displayName}</div>
        <div id="username">@{user.username}</div>
        <button className="follow-btn-placeholder">Follow</button>
      </div>
    </div>
  );
};

export default ProfileUser;
