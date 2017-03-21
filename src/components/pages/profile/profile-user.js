import React from 'react';
import '../../../styles/components/profile/profile-user.scss';

const ProfileUser = ({ user, loading }) => {
  if (loading) {
    console.log('loading...');
    return <div className="profile-user" />;
  }
  return (
    <div className="profile-user">
      <div className="profile-picture" />
      <div className="user-details">
        <div id="display-name">{user.displayName}</div>
        <div id="username">@{user.username}</div>
      </div>
    </div>
  );
};

export default ProfileUser;
