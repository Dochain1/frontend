import React, { useState } from 'react';
import CaseCard from '../../components/CaseCard';

const Cases = () => {
  const [cases, setCases] = useState(Array(3).fill());
  return (
    <>
      <h1 className='text-center text-black text-2xl my-4'>Casos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto px-20">
        {cases.map((_, index) => {
          return<CaseCard item={index} key={index} />;
        })}
      </div>
    </>
  );
};

export default Cases;
