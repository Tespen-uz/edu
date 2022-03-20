import { createContext } from "react";

export default createContext({
  user: {
    name: "",
    tel: "",
    age: "",
    score: "",
  },
  setUser: () => {},
});
