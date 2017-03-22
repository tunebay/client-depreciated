import React from 'react';
import '../../../styles/components/profile/profile-activity.scss';

const ProfileActivity = (props) => {
  return (
    <div className="profile-activity">
      {props.children}
    </div>
  );
};

export default ProfileActivity;
