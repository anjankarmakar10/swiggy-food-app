import { Component } from "react";

class ProfileClass extends Component {
  constructor(props) {
    super(props);
    // console.log("Child constructor" + this.props.name);

    this.state = {
      profile: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    let response = await fetch("https://api.github.com/users/anjankarmakar10");

    let data = await response.json();
    console.log(data);
    this.setState({
      profile: data,
    });
    // console.log("Child componentDidMount" + this.props.name);
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount");
  }

  render() {
    // console.log("Child render" + this.props.name);

    const { name, location, avatar_url: avatar } = this.state.profile;

    return (
      <div
        className="full-height"
        style={{ textAlign: "center", marginInline: "auto" }}
      >
        <h1>Profile</h1>
        {avatar ? (
          <img
            style={{
              width: "200px",
              borderRadius: "50%",
              marginInline: "auto",
              marginBlock: "1rem .5rem",
            }}
            src={avatar}
            alt=""
          />
        ) : (
          <div
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "#f2f2f2",
              borderRadius: "50%",
              marginInline: "auto",
              marginBlock: "1rem .5rem",
            }}
          ></div>
        )}
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default ProfileClass;
