import { useContext } from "react";
import { ConfettiContext } from "../../containers/AppContainer";

const useConfetti = function () {
  const { fireworkRef, schoolPrideRef } = useContext(ConfettiContext);
  console.log(fireworkRef);

  const startFirework = () => {
    if (fireworkRef.current) {
      fireworkRef.current();
    }
  };

  const startSchoolPride = () => {
    if (schoolPrideRef.current) {
      schoolPrideRef.current();
    }
  };

  return {
    startFirework,
    startSchoolPride,
  };
};

export default useConfetti;
