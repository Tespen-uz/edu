import React from 'react';
import CertCard from './CertCard';

function CertCardList() {
  return (
    <>
      <div className="container flex flex-wrap justify-around lg:justify-between py-8 pb-16 ">
        <CertCard />
        <CertCard />
        <CertCard />
        <CertCard />
        <CertCard />
        <CertCard />
      </div>
    </>
  );
}

export default CertCardList;
