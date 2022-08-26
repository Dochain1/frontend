import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Case = () => {
  const [documents, setDocuments] = useState(Array(5).fill());

  const {
    query: { caseId },
  } = useRouter();

  return (
    <>
      <h1>Case {caseId}</h1>
      <div>List of documents of case</div>
      {documents.map((_, index) => {
        return <div key={index}>{`Document ${index}`}</div>;
      })}
    </>
  );
};

export default Case;
