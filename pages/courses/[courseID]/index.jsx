import React from "react";
import { useRouter } from "next/router";

const CoursePage = () => {
  const router = useRouter();
  const { courseID } = router.query;
  return (
    <div className="py-8 ">
      <h1>{courseID}</h1>
    </div>
  );
};

export default CoursePage;
