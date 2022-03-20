import React from "react";
import ExamCardIteam from "./ExamCardIteam";

function ExamCardList({ data }) {
  return (
    <div>
      <div className="container py-10 flex flex-wrap justify-around md:justify-between">
        {data.map((item) => {
          return <ExamCardIteam key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default ExamCardList;
