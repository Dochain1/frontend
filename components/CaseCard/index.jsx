import React from 'react';
import { MdPlace } from 'react-icons/md';
import { BsUnlockFill, BsBriefcaseFill } from 'react-icons/bs';
import { FaUserAlt, FaUserTie } from "react-icons/fa";

const CaseCard = ({ item }) => {
  return<>  
  <div className="shadow-2xl max-w-sm w-full lg:max-w-full lg:flex rounded-2xl border-r border-b border-l border-t border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white  p-4 flex flex-col justify-between leading-normal">
    
    <div className="text-center pb-2 inline-block bg-gray-200 rounded-full px-3 py-1 ">
      <span className="text-xl font-semibold text-gray-700 mr-2 mb-2">CBBA5001</span>
    </div>
    
    <div className="flex items-center mt-4">
      <BsBriefcaseFill  className="mr-2 mb-2"/>
      <div className="text-gray-900 font-bold text-xl mb-2 leading-none">PORTAFOLIO</div>
    </div>
    
    <div className="flex items-start mt-4">
      <BsUnlockFill  className="fill-current text-gray-500 w-3 h-3 mr-2"/>
      <div className="text-sm">
        <p className="text-gray-900 leading-none font-semibold">Estado</p>
        <p className="text-gray-700">Abierto</p>
      </div>
    </div>

    <div className="flex items-start mt-4">
      <FaUserAlt  className="fill-current text-gray-500 w-3 h-3 mr-2"/>
      <div className="text-sm">
        <p className="text-gray-900 leading-none font-semibold">Demandante</p>
        <p className="text-gray-700">Nombre</p>
      </div>
    </div>

    <div className="flex items-start mt-4">
      <FaUserTie  className="fill-current text-gray-500 w-3 h-3 mr-2"/>
      <div className="text-sm">
        <p className="text-gray-900 leading-none font-semibold">Abogado Demandante</p>
        <p className="text-gray-700">Nombre</p>
      </div>
    </div>

    <div className="flex items-start mt-4">
      <FaUserAlt  className="fill-current text-gray-500 w-3 h-3 mr-2"/>
      <div className="text-sm">
        <p className="text-gray-900 leading-none font-semibold">Demandado</p>
        <p className="text-gray-700">Nombre</p>
      </div>
    </div>

    <div className="flex items-start mt-4">
      <FaUserTie  className="fill-current text-gray-500 w-3 h-3 mr-2"/>
      <div className="text-sm">
        <p className="text-gray-900 leading-none font-semibold">Abogado Demandado</p>
        <p className="text-gray-700">Nombre</p>
      </div>
    </div>

    <div className="flex items-start mt-4">
      <MdPlace  className="fill-current text-gray-500 w-3 h-3 mr-2"/>
      <div className="text-sm">
        <p className="text-gray-900 leading-none font-semibold">Lugar del caso</p>
        <p className="text-gray-600">Cochabamba, Bolivia</p>
      </div>
    </div>
    
    <div className="flex flex-row-reverse p-6 space-x-2 rounded-b border-t border-gray-200">
      <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" >Ver</button>
    </div>
  </div>
  </>
};

export default CaseCard;
