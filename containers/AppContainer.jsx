import React, { useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Fireworks from "../components/Confetti/Fireworks";
import SchoolPride from "../components/Confetti/SchoolPride";
import { useRouter } from "next/router";
import UserContext from "./userContext";

export const ConfettiContext = React.createContext(null);

const AppContainer = ({ children }) => {
  const [user, setUser] = React.useState({
    name: "",
    tel: "",
    age: "",
    score: "",
  });
  const fireworkRef = useRef(null);
  const schoolPrideRef = useRef(null);

  const value = {
    user,
    setUser,
  };

  const router = useRouter();

  return (
    <ConfettiContext.Provider
      value={{
        fireworkRef,
        schoolPrideRef,
      }}
    >
      <UserContext.Provider value={value}>
        <Navbar />
        {children}
        {router.pathname !== "/register" &&
          !router.pathname.includes("assessment") && <Footer />}
        <Fireworks fireworkRef={fireworkRef} />
        <SchoolPride schoolPrideRef={schoolPrideRef} />
      </UserContext.Provider>
    </ConfettiContext.Provider>
  );
};

export default AppContainer;
