import React from "react";
import Profile from "./Profile/Profile";
import pic from "./mypicture.png"

function App() {
  const handleName = name => {
    alert(`Name: ${name}`);
  };

  return (
    <div className="App">
      <Profile
        fullName="Herratia Ayoub"
        bio="Full-Stack developer"
        profession="Web-Developer"
        handleName={handleName}
      >
        <img src={pic} alt="me" />
      </Profile>
    </div>
  );
}

export default App;

