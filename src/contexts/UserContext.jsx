import { createContext } from "react";

const UserContext = createContext({
  user: {
    username: "dummy",
    name: "dummy name",
    email: "dummy@gmail.com",
  },
});

export default UserContext;
