import './App.css';
// La foto se importa desde src porque App.jsx está en esa misma carpeta.
import fotoPerfil from './imagenes/Usuario.jpg';
import Encabezado from './Components/Encabezado.jsx';
import Sidebar from './Components/Sidebar.jsx';
import PiePagina from './Components/PiePagina.jsx';
import Presentacion from './Components/Presentacion.jsx';
import Tarjeta from './Components/Tarjeta.jsx';

function App() {
  const programa = 'Análisis y Desarrollo de Software';

  // App conserva los datos del usuario y los reúne en un solo objeto para compartirlos.
  const usuario = {
    nombre: 'Brandon Esmith Cordoba Ortiz',
    rol: 'Aprendiz ADSO',
    foto: fotoPerfil,
    // El correo también viaja dentro del objeto para mostrarse en el menú desplegable.
    correo: 'bcordobaortiz06@gmail.com',
    // Estos datos también se envían a Presentacion como parte del mismo objeto.
    barrio: 'Valencia',
    telefono: '3148233833',
    descripcion: 'Aprendiz del SENA en Análisis y Desarrollo de Software.',
  };

  return (
    <>
      <div className='layout'>
        {/* Enviamos el objeto usuario al encabezado para que llegue hasta MenuUsuario. */}
        <Encabezado usuario={usuario} />
        {/* El mismo objeto se comparte con Sidebar para personalizar el saludo. */}
        <Sidebar usuario={usuario} />
        <main className="contenido">
          <h2>Bienvenido al programa {programa}</h2>
          <section className="tarjetas">
            {/* Presentacion recibe usuario y muestra su información sin datos personales fijos. */}
            <Presentacion usuario={usuario} />

            <Tarjeta
              icono="⚛️"
              titulo="React"
              descripcion="herramienta de java para construir interfaces con componentes"
              horas={120}
              destacada={true}
              delayClass="delay-2"
            />

            <Tarjeta
              icono="⚡"
              titulo="Vite"
              descripcion="Herramienta que crea, ejecuta y empaqueta  el proyecto"
              horas={60}
              destacada={false}
              delayClass="delay-3"
            />

            <Tarjeta
              icono="🔎"
              titulo="ESLint"
              descripcion="Revisa la calidad del codigo y encuentra errores de sintaxis y estilo"
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