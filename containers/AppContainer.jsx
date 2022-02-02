import React, { useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Fireworks from "../components/Confetti/Fireworks";
import SchoolPride from "../components/Confetti/SchoolPride";
import { useRouter } from "next/router";

export const ConfettiContext = React.createContext(null);

const AppContainer = ({ children }) => {
  const fireworkRef = useRef(null);
  const schoolPrideRef = useRef(null);

  const router = useRouter();

  return (
    <ConfettiContext.Provider
      value={{
        fireworkRef,
        schoolPrideRef,
      }}
    >
      <Navbar />
      {children}
      {router.pathname !== "/register" && <Footer />}
      <Fireworks fireworkRef={fireworkRef} />
      <SchoolPride schoolPrideRef={schoolPrideRef} />
    </ConfettiContext.Provider>
  );
};

export default AppContainer;
