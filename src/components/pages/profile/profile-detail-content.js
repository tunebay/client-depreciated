import React from 'react';
import '../../../styles/components/profile/profile-detail-content.scss';

const ProfileDetailContent = (props) => {
  return (
    <div className="profile-detail-content">
      {props.children}
    </div>
  );
};

export default ProfileDetailContent;
