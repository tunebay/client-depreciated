import React from 'react';
import className from 'classnames';
import '../../../styles/components/profile/profile-nav.scss';

const ProfileNav = (props) => {
  const navClass = className({
    'profile-nav-fixed': props.scrollY >= 300
  });

  return (
    <div id="profile-nav" className={navClass}>
      <ul className="profile-nav-ul">
        <li className="profile-nav-li selected">Music</li>
        <li className="profile-nav-li">Videos</li>
        <li className="profile-nav-li">Timeline</li>
        <li className="profile-nav-li">Following</li>
        <li className="profile-nav-li">Followers</li>
      </ul>
    </div>
  );
};

export default ProfileNav;
