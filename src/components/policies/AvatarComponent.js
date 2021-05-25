import React from "react";

const AvatarComponent = ({ avatar }) => {
  return (
    <>
      <div className="people-badges">
        <img className="avatar_img" src={avatar} alt={avatar} />
      </div>
    </>
  );
};

export default AvatarComponent;
