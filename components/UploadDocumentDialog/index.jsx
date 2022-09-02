import React, { useState, useEffect } from 'react';
import { decryptData, decryptPGP, getPublicKey } from '../../utils/encrypt';

const UploadDocumentDialog = ({ caseId }) => {
    const [showDialog, setShowDialog] = useState(false);
    
    const [uploadDocument, setUploadDocument] = useState({
      documentName : "",
      documentType : "",
      documentFile : "",
      dateAndTimeOfUploadDocument : new Date(),
      caseId
    });

    const documentTypes = ['Evidencia', 'Memorial', 'Prueba', 'Requerimiento', 'Resolucion'];

    const onChangeHandler = (event) => {
      setUploadDocument({ ...uploadDocument, [event.target.name]: event.target.value });
    };

    const onChangeFileInput = (e) => {
      setUploadDocument({ ...uploadDocument, documentFile: e.target.files[0]})
    };

    const saveUploadDocument = async () => {
      console.log(uploadDocument);

      let formData = new FormData();
      const publicKey = await getPublicKey();
      const keys = [publicKey, publicKey];
      for (const key of keys) {
        formData.append('keys', key);
      }
      formData.append('document', uploadDocument.documentFile);
      formData.append('documentName', uploadDocument.documentName);
      formData.append('documentType', uploadDocument.documentType);
      formData.append('dateAndTimeOfUploadDocument', uploadDocument.dateAndTimeOfUploadDocument);
      formData.append('caseId', uploadDocument.caseId);

      const response = await fetch(
        'https://api-dochain.herokuapp.com/api/v1/documents/upload',
        {
          method: 'POST',
          body: formData,
        }
      );
      console.log(response);
      const res = await response.json();
      console.log(res);
      console.log(res.data.cid);
      closeDialog();
    }

    const closeDialog = () =>{
      setUploadDocument({
        documentName : "",
        documentType : "",
        documentFile : "",
        dateAndTimeOfUploadDocument : new Date(),
        caseId
      })
      setShowDialog(false)
    }

    useEffect(() => {
      web3 = new Web3(window.ethereum);
      window.ethereum.enable().catch((error) => {
        // User denied account access
        console.log(error);
      });
    }, []);

    return <>
      <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center xy-2 " type="button" onClick={() => setShowDialog(true)}>
        Agregar Documento
      </button>
      
      {showDialog ? (
        <> 
          <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" a-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
              
              <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                  <div className="flex justify-between items-center p-5 rounded-t border-b bg-slate-400">
                    <h3 className="text-xl font-medium text-white">
                    Agregar Documento
                    </h3>
                    <button type="button" className="bg-gray-200 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" onClick={() => closeDialog()}>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">

                    <form action="https://api-dochain.herokuapp.com/api/v1/documents/upload" method="post" encType="multipart/form-data" className="space-y-6">
                      <div>
                          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre del documento</label>
                          <input type="text" name="documentName" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Tipo de denuncia" required value={uploadDocument.documentName} onChange={onChangeHandler}></input>
                      </div>
                      <div>
                          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Tipo de documento</label>
                          <select name="documentType" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required value={uploadDocument.documentType} onChange={onChangeHandler}>
                            {documentTypes.map((documentType, index) => {
                              return <option value={`${documentType}`} key={index} className="bg-white border-b">{documentType}</option>;
                            })}
                          </select>
                      </div>
                      <div>
                          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Seleccionar documento</label>
                          <input type="file" name="documentFile" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required onChange={onChangeFileInput}></input>
                      </div>
                    </form>
                  </div>
                  
                  <div className="flex flex-row-reverse p-6 space-x-2 rounded-b border-t border-gray-200">
                    <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => saveUploadDocument()}>Aceptar</button>
                    <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => closeDialog()}>Cancelar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>;
};

export default UploadDocumentDialog;
