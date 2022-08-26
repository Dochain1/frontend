import React, { useState } from 'react';
import CaseCard from '../../components/CaseCard';

const Cases = () => {
  const [cases, setCases] = useState(Array(5).fill());
  return (
    <>
      <h1>Cases</h1>
      <h3>List of case</h3>
      {cases.map((_, index) => {
        return <CaseCard item={index} key={index} />;
      })}
    </>
  );
};

export default Cases;
