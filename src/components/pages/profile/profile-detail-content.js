import React from 'react';
import className from 'classnames';
import '../../../styles/components/profile/profile-detail-content.scss';

const ProfileDetailContent = (props) => {
  const contentClass = className({
    'profile-detail-content': true,
    'profile-detail-margin': props.scrollY >= 250
  });
  return (
    <div className={contentClass}>
      {props.children}
    </div>
  );
};

export default ProfileDetailContent;
