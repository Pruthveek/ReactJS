import { useEffect, useState } from "react";

const Profile = (props) => {
  const [userInformation, setUserInformation] = useState();
  useEffect(() => {
    profileData();
    // const timer=setInterval(()=>{
    //     console.log("hello")
    // },1000);
    // return () => {
    //     clearInterval(timer);
    //   console.log("Component Unmounted");
    // };
  }, []);

  const profileData = async () => {
    
    const data = await fetch("https://api.github.com/users/Pruthveek");
    const json = await data.json();
    console.log(json);
    setUserInformation(json);
  };

  return (
    <div className="profile-container">
      <h1>CEO of FOOD MARKET</h1>
      <img src={userInformation?.avatar_url} alt="avatar" />
      <h2>NAME : {userInformation?.login}</h2>
    </div>
  );
};
export default Profile;
