import { useState, useEffect } from "react";

const Profile = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log("useEffect");
  });

  const handleCount = () => {
    setCount(count + 1);
  };

  // console.log("Render");
  return (
    <div>
      <h1>Functional Component</h1>
      <h2>Name: {name} </h2>
      <h2>Count: {count}</h2>
      <button onClick={handleCount}>Click</button>
      <hr style={{ marginTop: "8px" }} />
    </div>
  );
};

export default Profile;
