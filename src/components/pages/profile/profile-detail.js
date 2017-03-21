import React from 'react';
import '../../../styles/components/profile/profile-detail.scss';

const ProfileDetail = (props) => {
  return (
    <div className="profile-detail">
      {props.children}
    </div>
  );
};

export default ProfileDetail;
