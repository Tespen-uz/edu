import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";
import UserContext from "./userContext";

const AppContainer = ({ children }) => {
  const [user, setUser] = React.useState({
    name: "",
    tel: "",
    age: "",
    score: "",
  });

  const value = {
    user,
    setUser,
  };

  const router = useRouter();

  return (
    <UserContext.Provider value={value}>
      <Navbar />
      {children}
      {router.pathname !== "/register" &&
        !router.pathname.includes("assessment") && <Footer />}
    </UserContext.Provider>
  );
};

export default AppContainer;
