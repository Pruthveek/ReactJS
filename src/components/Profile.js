import { useEffect, useState, useContext } from "react";
import UserContext from "../utils/userContext";

const Profile = (props) => {
  const { user } = useContext(UserContext);
  const [userInformation, setUserInformation] = useState();

  useEffect(() => {
    profileData();
  }, []);

  const profileData = async () => {
    const data = await fetch("https://api.github.com/users/Pruthveek");
    const json = await data.json();
    setUserInformation(json);
  };

  return (
    <div className="profile-container">
      <h1>CEO of FOOD MARKET</h1>
      <img src={userInformation?.avatar_url} alt="avatar" />
      <h2>NAME : {userInformation?.login}</h2>
      <h3>{user.name}</h3>
      <h3>{user.email}</h3>
      <div>
       <h3>{user.public_repos}</h3>
        <progress value="56" max="100" className="progress-bar"></progress>
      </div>
      <div className="chack-box">

      </div>
    </div>
  );
};

export default Profile;
