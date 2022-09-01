import React, { useState } from 'react';
import { useRouter } from 'next/router';
import UploadDocumentDialog from '../../components/UploadDocumentDialog';

const Case = () => {
  // eslint-disable-next-line no-unused-vars
  const [documents, setDocuments] = useState(Array(5).fill());

  const hashMapColorByTypeDocument = new Map([
    [1,"bg-purple-200 text-purple-600"],
    [2,"bg-green-200 text-green-600"],
    [3,"bg-yellow-200 text-yellow-60"],
    [4,"bg-red-200 text-red-600"],
    [5,"bg-blue-200 text-blue-600"],
  ]);

  const {
    query: { caseId },
  } = useRouter();

  return (
    <>
    <UploadDocumentDialog caseId={caseId}/>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden px-20 ">
              <table className="min-w-full text-center shadow-2xl rounded-lg">
              <thead className="border-b bg-blue-200">
                  <tr>
                    <th colSpan="4" className="uppercase text-xl font-medium text-gray-900 px-6 py-4">
                      Documentos del caso: {caseId}
                    </th>
                  </tr>
                </thead>
                <thead className="border-b bg-gray-500">
                  <tr>
                    <th scope="col" className="uppercase text-sm font-medium text-white px-6 py-4">
                      Documento
                    </th>
                    <th scope="col" className="uppercase text-sm font-medium text-white px-6 py-4">
                      Fecha/Hora de subida
                    </th>
                    <th scope="col" className="uppercase text-sm font-medium text-white px-6 py-4">
                      Tipo de documento
                    </th>
                    <th scope="col" className="uppercase text-sm font-medium text-white px-6 py-4">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((_, index) => {
                    return <tr key={index} className="bg-white border-b">
                    <td className="text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Documento</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      31 Agosto 2022 - 18:00
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <span className={`py-1 px-3 rounded-full text-xs ${hashMapColorByTypeDocument.get(index+1)}`}>Active</span>      
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 py-1 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">Ver</button>
                    </td>
                  </tr>;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Case;
