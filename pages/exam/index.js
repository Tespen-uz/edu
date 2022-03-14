import React from "react";
import ExamCardList from "../../layouts/ExamPage/ExamCard/ExamCardList";
import ExamHeader from "../../layouts/ExamPage/ExamHeader/ExamHeader";

function index({ data }) {
  return (
    <>
      <ExamHeader />
      <ExamCardList data={data} />
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://cp.stanfordschool.uz/api/test`);
  const data = await res.json();

  return {
    props: { data },
  };
}

export default index;
