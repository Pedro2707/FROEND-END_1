import React from 'react';

const DatosMedico = () => {
  return (
    <div className="mb-4">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Datos del Médico</h3>
      <form className="space-y-4">
        {/* Campo para el ID del Médico */}
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">ID del Médico:</label>
          <input 
            type="text" 
            name="idMedico" 
            className="w-full border border-gray-300 p-2 rounded-lg" 
            placeholder="Ingrese el ID del médico"
          />
        </div>

        {/* Menú desplegable para el Nombre del Médico */}
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Nombre del Médico:</label>
          <select 
            name="nombreMedico" 
            className="w-full border border-gray-300 p-2 rounded-lg"
          >
            <option value="">Seleccionar</option>
            <option value="Dr.Menendez">Dr.Menendez</option>
            <option value="Dr.Andrade">Dr.Andrade</option>
            <option value="Lic.Wendy">Lic.Wendy</option>
            <option value="Dr.Claudia">Dr.Claudia</option>
            <option value="Dr.Bladimir">Dr.Bladimir</option>
            <option value="Dr.Maricela">Dr.Maricela</option>
            <option value="Dr.Leon_Rivera">Dr.Leonela Rivera</option>
            <option value="Dr.Mario_Gonzales">Dr.Mario Gonzales</option>
            <option value="Dr.Alberto_Bonilla">Dr.Alberto Bonilla</option>
            <option value="Dr.Braz">Dr.Braz</option>
            <option value="Dr.Luis_Troches">Dr.Luis Troches</option>
            <option value="Dra.Ramos">Dr.Ramos</option>
            <option value="Lic.Carmen">Lic.Carmen</option>
            <option value="Dr.Valder_Ramos">Dr.Valder Ramos</option>
          </select>
        </div>

        {/* Campo para el Establecimiento de Salud */}
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Establecimiento de Salud:</label>
          <input 
            type="text" 
            name="establecimiento" 
            className="w-full border border-gray-300 p-2 rounded-lg" 
            placeholder="Ingrese el establecimiento de salud"
          />
        </div>

        {/* Campo para el Número de Teléfono */}
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Número de Teléfono:</label>
          <input 
            type="text" 
            name="telefonoMedico" 
            className="w-full border border-gray-300 p-2 rounded-lg" 
            placeholder="Ingrese el número de teléfono"
          />
        </div>

        {/* Campo para el Correo del Médico */}
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Correo del Médico:</label>
          <input 
            type="email" 
            name="correoMedico" 
            className="w-full border border-gray-300 p-2 rounded-lg" 
            placeholder="Ingrese el correo electrónico"
          />
        </div>

        {/* Campo para Observaciones */}
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Observaciones:</label>
          <textarea 
            name="observaciones" 
            className="w-full border border-gray-300 p-2 rounded-lg" 
            rows="3"
            placeholder="Ingrese las observaciones"
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default DatosMedico;


