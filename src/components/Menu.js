import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCalendarPlus } from 'react-icons/fa';

const Menu = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative overflow-hidden">
      <div className="bg-white shadow-lg rounded-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 transition-transform transform hover:scale-105 z-10">
        <div className="flex items-center justify-between mb-8">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2rC6mKlm3Wj324Y_Ukz5l7JNcQz-nYvbgA&s"
            alt="Hospital Logo"
            className="h-28 w-28 rounded-full border-4 border-blue-500 shadow-lg"
          />
          <div className="text-center mx-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 leading-tight mb-1">
              Bienvenidos al Hospital General San Francisco
            </h1>
            <p className="text-lg text-gray-600 mt-2 font-semibold">Juticalpa Olancho</p>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcg69VjoucBbs1w1I2oJZiQkgaWDLCG3iKgQ&s"
            alt="Imagen adicional"
            className="h-28 w-28 rounded-full border-4 border-green-500 shadow-lg"
          />
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          <Link to="/usuario">
            <div className="flex items-center justify-center bg-blue-600 text-white py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <FaUser className="text-xl mr-2" />
              <span className="text-lg font-semibold text-center">Usuario</span>
            </div>
          </Link>
          <Link to="/agendar-cita">
            <div className="flex items-center justify-center bg-green-600 text-white py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <FaCalendarPlus className="text-xl mr-2" />
              <span className="text-lg font-semibold text-center">Agendar Cita</span>
            </div>
          </Link>
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p className="text-lg font-medium">Seleccione una opción para continuar</p>
        </div>
      </div>
      <img
        src="https://media.tenor.com/7M84fx_mh20AAAAM/ambulance-ambulanceemoji.gif"
        alt="Ambulance GIF"
        className="ambulance-gif absolute bottom-4 left-0 h-24"
      />
    </div>
  );
}

export default Menu;







