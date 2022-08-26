import React from 'react';
import { useRouter } from 'next/router';

const Document = () => {
  const {
    query: { documentHash },
  } = useRouter();

  return <h1>document {documentHash}</h1>;
};

export default Document;
