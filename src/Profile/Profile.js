import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, handleName, children }) => {
  return (
    <div style={{ border: "1px solid black", padding: "20px"}}>
      {children}
      <h1>{fullName}</h1>
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={() => handleName(fullName)}>Show Name</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "Herrati Ayoub",
  bio: "Full-Stack developer",
  profession: "Web-Developer"
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default Profile;

