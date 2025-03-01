import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInformation: {
        login: "Pappu Patel",
        location: "New York",
      },
    };
  }

  async componentDidMount() {
    // this .timer=setInterval(()=>{
    //     console.log("hello")
    // },1000);
    const data = await fetch("https://api.github.com/users/Pruthveek");
    const json = await data.json();
    this.setState({ userInformation: json });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("Component Unmounted");
  }
  render() {
    const { count } = this.state;
    console.log("Component Rendered " + this.state.userInformation.login);
    return (
      <div className="profile-container">
        <h1>CEO of FOOD MARKET</h1>
        <img src={this.state.userInformation.avatar_url} alt="avatar" />
        <h2>{this.state.userInformation.login}</h2>
        <h3>{this.state.userInformation.location}</h3>
      </div>
    );
  }
}

export default ProfileClass;