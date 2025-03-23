import { useEffect, useState ,useContext} from "react";
import UserContext from "../utils/userContext";

const Profile = (props) => {
  const {user}=useContext(UserContext);
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
      <h3>{user.name}</h3>
      <h3>{user.email}</h3>
    </div>
  );
};
export default Profile;
