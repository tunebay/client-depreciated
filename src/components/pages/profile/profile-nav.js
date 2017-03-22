import React from 'react';
import className from 'classnames';
import '../../../styles/components/profile/profile-nav.scss';

const ProfileNav = (props) => {
  const navClass = className({
    'profile-nav-fixed': props.scrollY >= 300
  });

  return (
    <div id="profile-nav" className={navClass} />
  );
};

export default ProfileNav;
