import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from '../../components/header/Navbar.jsx';
import List from '../../components/list/list.jsx';

const Asistencia = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSaveClick = () => {
    setShowModal(true);
  };

  const handleConfirmSave = () => {
    setShowModal(false);
  };

  const handleCancelSave = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <div className="p-4">
        <p className="text-3xl mb-2">pasar lista</p>
        <div className="w-full h-px bg-black"></div>
        <div className="mt-2 space-y-4">
          <div className="flex items-center">
            <label htmlFor="fecha" className="text-xl w-28 ml-24">
              fecha:
            </label>
            <input
              type="date"
              id="fecha"
              className="p-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className='flex flex-row justify-around gap-5'>
            <div className="flex items-center">
              <label htmlFor="modulo" className="text-xl w-28">
                módulo:
              </label>
              <select
                id="modulo"
                className="p-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-300 ease-in-out hover:border-teal-500 focus:border-teal-500"
              >
                <option value="modulo1">módulo 1</option>
                <option value="modulo2">módulo 2</option>
                <option value="modulo3">módulo 3</option>
                <option value="modulo4">módulo 4</option>
              </select>
            </div>
            <div className="flex items-center">
              <label htmlFor="turno" className="text-xl w-28">
                turno:
              </label>
              <select
                id="turno"
                className="p-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-300 ease-in-out hover:border-teal-500 focus:border-teal-500"
              >
                <option value="am">am</option>
                <option value="pm">pm</option>
              </select>
            </div>
            <div className="flex items-center">
              <label htmlFor="turno" className="text-xl w-28">
                grado:
              </label>
              <select
                id="grado"
                className="p-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-300 ease-in-out hover:border-teal-500 focus:border-teal-500"
              >
                <option value="1">1ro</option>
                <option value="2">2do</option>
              </select>
            </div>
            <div className="flex items-center">
              <label htmlFor="turno" className="text-xl w-28">
                sección:
              </label>
              <select
                id="seccion"
                className="p-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-300 ease-in-out hover:border-teal-500 focus:border-teal-500"
              >
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
                <option value="d">d</option>
              </select>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <div class="relative mb-2 flex w-80 flex-wrap items-stretch flex justify-end mt-8">
            <span
              class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
              id="basic-addon2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5">
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <input
              type="search"
              class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-xl border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="buscar alumno"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
          </div>

        </div>
        <div className="flex flex-col mt-8 max-h-80 overflow-hidden">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left bg-background-white">
                  <thead className="border-b dark:border-neutral-500 sticky top-0">
                    <tr>
                      <th scope="col" className="px-6 py-4">alumno</th>
                      <th scope="col" className="px-6 py-4">
                        <span className="bg-green text-white px-3 py-1 rounded-lg">presente</span>
                      </th>
                      <th scope="col" className="px-6 py-4">
                        <span className="bg-yellow text-white px-3 py-1 rounded-lg">permiso</span>
                      </th>
                      <th scope="col" className="px-6 py-4">
                        <span className="text-thin bg-red text-white px-3 py-1 rounded-lg">desertó</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="overflow-y-auto">
                    <List name="Juan Pérez" />
                    <List name="Juan Pérez" />
                    <List name="Juan Pérez" />
                    <List name="Juan Pérez" />
                    <List name="Juan Pérez" />
                    <List name="Juan Pérez" />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-44">
          <Link to="/home">
            <button
              type="button"
              class="inline-block rounded-xl bg-neutral-50 px-6 pb-2 pt-2.5 text-l font-normal leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]">
              regresar
            </button>
          </Link>
          <button
            type="button"
            onClick={handleSaveClick}
            className="inline-block rounded-xl bg-gray-700 px-6 pb-2 pt-2.5 text-l font-normal leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-gray-700 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-gray-700 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-gray-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-gray-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-gray-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-gray-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]">
            guardar
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-xl mb-4">¿seguro que desea guardar estos cambios?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirmSave}
                className="px-4 py-2 bg-green text-white rounded-lg hover:bg-green-600 focus:outline-none"
              >
                sí
              </button>
              <button
                onClick={handleCancelSave}
                className="px-4 py-2 bg-red text-white rounded-lg hover:bg-red-600 focus:outline-none"
              >
                no
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Asistencia;


