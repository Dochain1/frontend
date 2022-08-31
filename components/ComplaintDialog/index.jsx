import React, { useState } from 'react';

const ComplaintDialog = () => {
    const [showDialog, setShowDialog] = useState(false);
    
    const [complaint, setComplaint] = useState({
      typeComplaint : "",
      dateAndTimeOfComplaint : new Date(),
      casePlace : "",
      crime : "",
      crimeDate : "",
      crimePlace : "",
      defendant : "",
      demanding : "",
      defendantLawyer : "",
      demandingLawyer : "",
    });

    const onChangeHandler = (event) => {
      setComplaint({ ...complaint, [event.target.name]: event.target.value });
    };

    const saveComplaint = () => {
      //save Complaint to Blockchain
      closeDialog();
    }

    const closeDialog = () =>{
      setComplaint({
        typeComplaint : "",
        dateAndTimeOfComplaint : new Date(),
        casePlace : "",
        crime : "",
        crimeDate : "",
        crimePlace : "",
        defendant : "",
        demanding : "",
        defendantLawyer : "",
        demandingLawyer : "",
      })
      setShowDialog(false)
    }

    return <>
      <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center xy-2 " type="button" onClick={() => setShowDialog(true)}>
        Nueva Denuncia
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
                        Nueva Denuncia
                    </h3>
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" onClick={() => closeDialog()}>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">

                    <form className="space-y-6" action="#">
                      <div>
                          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Tipo de denuncia</label>
                          <input type="text" name="typeComplaint" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Tipo de denuncia" required value={complaint.typeComplaint} onChange={onChangeHandler}></input>
                      </div>
                      <div>
                          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Lugar del caso</label>
                          <input type="text" name="casePlace" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Lugar del caso" required value={complaint.casePlace} onChange={onChangeHandler}></input>
                      </div>
                      <div>
                          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Crimen</label>
                          <textarea rows="5" cols="60" name="crime" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Crimen" required value={complaint.crime} onChange={onChangeHandler}></textarea>
                      </div>
                      <div>
                          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Fecha del Crimen</label>
                          <input type="date" name="crimeDate" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Fecha del Crimen" required value={complaint.crimeDate} onChange={onChangeHandler}></input>
                      </div>
                      <div>
                          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Lugar del Crimen</label>
                          <input type="text" name="crimePlace" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Lugar del Crimen" required value={complaint.crimePlace} onChange={onChangeHandler}></input>
                      </div>
                      <div>
                          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre del demandante</label>
                          <input type="text" name="defendant" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Nombre del demandate" required value={complaint.defendant} onChange={onChangeHandler}></input>
                      </div>
                      <div>
                          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre del demandado</label>
                          <input type="text" name="demanding" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Nombre del demandado" required value={complaint.demanding} onChange={onChangeHandler}></input>
                      </div>
                      <div>
                          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Abogado del demandante</label>
                          <input type="text" name="defendantLawyer" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Abogado del demandate" required value={complaint.defendantLawyer} onChange={onChangeHandler}></input>
                      </div>
                      <div>
                          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Abogado del demandado</label>
                          <input type="text" name="demandingLawyer" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Abogado del demandado" required value={complaint.demandingLawyer} onChange={onChangeHandler}></input>
                      </div>
                    </form>
                  </div>
                  
                  <div className="flex flex-row-reverse p-6 space-x-2 rounded-b border-t border-gray-200">
                    <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => saveComplaint()}>Aceptar</button>
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

export default ComplaintDialog;
