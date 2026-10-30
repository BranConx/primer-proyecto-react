import './App.css'
import fotoPerfil from './Imagenes/nachelle-nocom-LWVIR87DHPY-unsplash.jpg'
import Encabezado from './componentes/Encabezado'
import Sidebar from './componentes/Sidebar'
import Tarjeta from './componentes/Tarjeta'
import { tecnologias } from './data/tecnologias'
import PiePagina from './componentes/PiePagina'
import Presentacion from './componentes/Presentacion'


function App() {

  const programa = "Analisis y Desarrollo de Software"
  const usuario = {
  nombre: 'Daniel Andres Narvaez Narvaez',
  rol: 'Aprendiz ADSO',
  foto: fotoPerfil,
}

  return (
  <>
  <div className="layout">
    <Encabezado usuario={usuario} />
    <Sidebar usuario={usuario} />
    <main className="contenido">
    <h2>Bievenido al programa de {programa}</h2>
    <Presentacion />
    <section className="tarjetas">
      {tecnologias.map((tec) =>
        <Tarjeta
          key={tec.id}
          icono={tec.icono}
          titulo={tec.titulo}
          descripcion={tec.descripcion}
          horas={tec.horas}
          destacada={tec.destacada}
        />
      )}
    </section>
    </main>
    <PiePagina />
  </div>
  </>
  )
}

export default App