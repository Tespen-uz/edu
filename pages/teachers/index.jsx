import React from "react";
import StudentCardList from "../../components/Student/StudentCardList";
import TechCartList from "../../components/Tech/TechCartList";
import TechSliderList from "../../components/Tech/TechSliderList";
import TechId from "../../components/TechId/TechId";

const AboutPage = () => {
  return (
    <div>
      {/* <TechCartList /> */}
      <TechSliderList />
      <StudentCardList />
      {/* <TechId /> */}
    </div>
  );
};

export default AboutPage;
