import React, { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { findCitaMedicaByPage } from "../api/citaMedica";
import { useParams, useNavigate } from "react-router-dom";

const CitasPage = () => {
  const { page: pageParam } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(parseInt(pageParam) || 1);
  const [citas, setCitas] = useState([]);
  const totalPages = 5; // Cambia esto según el total de páginas disponibles

  useEffect(() => {
    (async () => {
      const fetchedCitas = await findCitaMedicaByPage(page);
      setCitas(fetchedCitas);
    })();
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    navigate(`/dashboard/citas/${newPage}`);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Citas Médicas
        </h1>
        <div className="space-y-6">
          {citas.map((cita) => (
            <div
              key={cita.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                {cita.cita}
              </h2>
              <p className="text-gray-600 mb-1">
                <strong>Fecha:</strong> {cita.fecha}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Doctor:</strong> {cita.doctor}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Teléfono:</strong> {cita.doctor_telefono}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Correo:</strong> {cita.doctor_correo}
              </p>
              <p className="text-gray-600">
                <strong>Observaciones:</strong> {cita.observaciones}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-8 space-x-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`mx-1 px-4 py-2 rounded-lg font-bold ${
                page === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg disabled:opacity-50"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Anterior
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages} // Deshabilitar si es la última página
          >
            Siguiente
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CitasPage;






