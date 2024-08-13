import React from 'react';
import DatosPersona from './DatosPersona';
import DetallesCitaMedica from './DetallesCitaMedica';
import DatosMedico from './DatosMedico';

const AgendarCita = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-black rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-6">Agendar Cita</h2>
      <div className="w-full max-w-3xl bg-gray-200 p-6 rounded-lg shadow-md border border-gray-600">
        <DatosPersona />
        <DetallesCitaMedica />
        <DatosMedico />
        <div className="flex justify-center mt-4">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transform transition-all duration-300 hover:scale-105">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgendarCita;








