import './App.css'
import Encabezado from './Components/Encabezado.jsx'
import Sidebar from './Components/Sidebar.jsx'
import Tarjeta from './Components/Tarjeta.jsx'
import Presentacion from './Components/Presentacion.jsx'

function App(){
  const programa ="Analisis y Desarrollo de software"
  return(
    <>
    <div className='layout'>
    <Encabezado/>
    <Sidebar/>
    <main className='contenido'>
      <h2> Bienvenidos al programa {programa}</h2>
      <section className='tarjetas'>
        <Presentacion/>
        <Tarjeta delayClass="delay-2"/>
        <Tarjeta delayClass="delay-3"/>
      </section>
    </main>
    </div>
    </>
  )
}

export default App