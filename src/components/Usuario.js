import React, { useContext, useEffect } from 'react';
import { signin } from '../api/user';
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const Usuario = () => {
  const { token, login, logout } = useContext(AuthContext);
  const navigation = useNavigate()
  
  useEffect(()=>{
    if(token){
      navigation('/dashboard');
    }
  },[token]);

  const submit = async (event) => {
    event.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;
    if (!usuario || !password) {
      return;
    }

    const { accessToken } = await signin(usuario, password);
    login(accessToken);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://tiempo.hn/wp-content/uploads/2020/12/WhatsApp-Image-2020-08-14-at-9.30.09-AM-1.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-300">
          Iniciar sesión
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500">
          Accede a tu cuenta para continuar
        </p>
        <div className="mt-6 space-y-6">
          <div>
            <label htmlFor="usuario" className="block text-sm font-medium leading-6 text-gray-300 text-center">
              Usuario
            </label>
            <div className="mt-2">
              <input
                id="usuario"
                name="usuario"
                type="text"
                required
                autoComplete="username"
                className="block w-full rounded-md border-0 py-2 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Ingresa tu usuario"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-300 text-center">
              Contraseña
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-2 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Ingresa tu contraseña"
              />
            </div>

          </div>

          <div>
            <button
              type="button"
              onClick={submit}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-md hover:bg-indigo-500 transition duration-200 ease-in-out"
            >
              Iniciar sesión
            </button>
          </div>
        </div>
       </div>
    </div>

  );
}

export default Usuario;

