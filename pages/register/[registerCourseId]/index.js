import React from "react";
import Register from "../../../layouts/login/Register";

const RegisterPage = () => {
  return (
    <React.Fragment>
      <main>
        <Register />
      </main>
    </React.Fragment>
  );
};

export default RegisterPage;



export async function getServerSideProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default,
    },
  };
}
