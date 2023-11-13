import { Component } from "react";
import ProfileClass from "./ProfileClass";
import UserContext from "../contexts/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }

  async componentDidMount() {
    // console.log("Parent componentDidMount");
  }

  render() {
    // console.log("Parent render");

    return (
      <section className="container">
        <UserContext.Consumer>
          {({ user }) => <span>{user.username}</span>}
        </UserContext.Consumer>
        <h1>About Us</h1>
        <ProfileClass name={" First"} />
      </section>
    );
  }
}

export default About;
