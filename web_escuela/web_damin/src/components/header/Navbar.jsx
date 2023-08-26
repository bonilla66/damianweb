import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import icono from '../../images/icono.png';
import icop from '../../images/pp.png';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    // Realiza las acciones de cierre de sesión aquí
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/home">
          <img src={icono} alt="Logo" className="w-24 h-auto" />
        </Link>
        <div className="flex items-center space-x-6">
          <Link
            to="/asistencia"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            asistencia
          </Link>
          <Link
            to="/stats"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            estadísticas
          </Link>
          <Link
            to="/notas"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            notas
          </Link>
        </div>
        <div className="relative" ref={dropdownRef}>
          <div className="cursor-pointer" onClick={toggleDropdown}>
            <img
              src={icop}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-gray-800 border rounded-md">
              <Link to="/login">
                <button onClick={handleLogout} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                  Salir
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;








