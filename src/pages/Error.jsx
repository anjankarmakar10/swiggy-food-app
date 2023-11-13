import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();

  return (
    <div
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",
      // }}
      className="container"
    >
      <h1>Opps!!!</h1>
      <h2 style={{ color: "hotpink" }}>Somthing went wrong...</h2>
      <h3 style={{ color: "#fc8019" }}>{`${status} Page ${statusText}!`}</h3>
    </div>
  );
};

export default Error;
