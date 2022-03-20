import React from "react";
import ExamCardList from "../../layouts/ExamPage/ExamCard/ExamCardList";
import ExamHeader from "../../layouts/ExamPage/ExamHeader/ExamHeader";

function ExamsPage({ data }) {
  return (
    <>
      <ExamHeader />
      <ExamCardList data={data} />
    </>
  );
}

export async function getServerSideProps({ locale }) {
  const res = await fetch(`https://cp.stanfordschool.uz/api/test`);
  const data = await res.json();

  return {
    props: {
      data,
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}

export default ExamsPage;
