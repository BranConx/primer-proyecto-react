import './App.css'
import { Routes, Route } from 'react-router'
import Encabezado from './Components/Encabezado.jsx'
import Sidebar from './Components/Sidebar.jsx'
import PiePagina from './Components/PiePagina.jsx'
import Inicio from './paginas/inicio.jsx'
import Perfil from './paginas/perfil.jsx'
import fotoPerfil from './imagenes/Usuario.jpg'

function App() {
  const programa = 'Análisis y Desarrollo de Software'

  const usuario = {
    nombre: 'Brandon Esmith Córdoba Ortiz',
    rol: 'Aprendiz ADSO',
    foto: fotoPerfil,
    correo: 'bcordobaortiz06@gmail.com',
    barrio: 'Valencia',
    telefono: '3148233833',
    descripcion: 'Aprendiz del SENA en Análisis y Desarrollo de Software.',
  }

  return (
    <div className="layout">
      <Encabezado usuario={usuario} />
      <Sidebar usuario={usuario} />

      <main className="contenido">
        <Routes>
          <Route path="/" element={<Inicio usuario={usuario} />} />
          <Route path="/perfil" element={<Perfil usuario={usuario} />} />
        </Routes>
      </main>

      <PiePagina />
    </div>
  )
}

export default App