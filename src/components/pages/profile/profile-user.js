import React from 'react';
import className from 'classnames';
import '../../../styles/components/profile/profile-user.scss';

const ProfileUser = ({ user, loading, scrollY }) => {
  const profileUserClass = className({
    'profile-user': true,
    'profile-user-fixed': scrollY >= 250
  });

  if (loading) {
    return <div className={profileUserClass} />;
  }
  return (
    <div className={profileUserClass}>
      <img
        alt="default-profile"
        src="../../../../assets/images/default-profile-picture.png" className="profile-picture-placeholder"
      />
      <div className="user-details">
        <div id="display-name">{user.displayName}</div>
        <div id="username">@{user.username}</div>
        <button className="follow-btn-placeholder">Follow</button>
      </div>
    </div>
  );
};

export default ProfileUser;
