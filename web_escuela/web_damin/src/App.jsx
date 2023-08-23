import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '..//src//pages//1.home//Home.jsx'
import Login from '..//src//pages//2.login//Login.jsx'
import Asistencia from '..//src//pages//3.asistencia//Asistencia.jsx'
import './App.css'

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/asistencia" element={<Asistencia />} />


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
