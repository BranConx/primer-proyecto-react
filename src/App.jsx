import './App.css';
import fotoPerfil from './imagenes/Usuario.jpg';
import Encabezado from './Components/Encabezado.jsx';
import Sidebar from './Components/Sidebar.jsx';
import PiePagina from './Components/PiePagina.jsx';
import Presentacion from './Components/Presentacion.jsx';
import Tarjeta from './Components/Tarjeta.jsx';

function App() {
  const programa = 'Análisis y Desarrollo de Software';

  const usuario = {
    nombre: 'Brandon Esmith Córdoba Ortiz',
    rol: 'Aprendiz ADSO',
    foto: fotoPerfil,
    correo: 'bcordobaortiz06@gmail.com',
    barrio: 'Valencia',
    telefono: '3148233833',
    descripcion: 'Aprendiz del SENA en Análisis y Desarrollo de Software.',
  };

  return (
    <>
      <div className='layout'>
        <Encabezado usuario={usuario} />
        <Sidebar usuario={usuario} />

        <main className="contenido">
          <h2>Bienvenido al programa {programa}</h2>
          <section className="tarjetas">
            <Presentacion usuario={usuario} />

            <Tarjeta
              icono="⚛️"
              titulo="React"
              descripcion="Herramienta de JavaScript para construir interfaces con componentes."
              horas={120}
              destacada={true}
              delayClass="delay-2"
            />

            <Tarjeta
              icono="⚡"
              titulo="Vite"
              descripcion="Herramienta que crea, ejecuta y empaqueta el proyecto."
              horas={60}
              destacada={false}
              delayClass="delay-3"
            />

            <Tarjeta
              icono="🔎"
              titulo="ESLint"
              descripcion="Revisa la calidad del código y encuentra errores de sintaxis y estilo."
              horas={20}
              destacada={true}
              delayClass="delay-4"
            />
          </section>
        </main>

        <PiePagina />
      </div>
    </>
  );
}
export default App;