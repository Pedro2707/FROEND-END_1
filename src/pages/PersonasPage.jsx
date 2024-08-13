import React, { useEffect, useState } from 'react';
import { findPersonaByPage } from '../api/persona';

const PersonasPage = () => {
  const [personas, setPersonas] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPersonas = async () => {
      try {
        const data = await findPersonaByPage(page);
        setPersonas(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPersonas();
  }, [page]);

  return (
    <div>
      <h1>Personas</h1>
      <ul>
        {personas.map(persona => (
          <li key={persona.id}>{persona.nombre}</li>
        ))}
      </ul>
      {/* Agregar paginación y otras funcionalidades */}
    </div>
  );
};

export default PersonasPage;
