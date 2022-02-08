import React from "react";
import CertCard from "./CertCard";

function CertCardList({ certificates }) {
  return (
    <>
      <div className="container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 pb-16 ">
        {certificates.map((certificate) => (
          <CertCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </>
  );
}

export default CertCardList;
