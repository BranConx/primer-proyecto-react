import MenuUsuario from './MenuUsuario'

function Encabezado({ usuario }) {
  return (
    <header className="encabezado">
      <div className="encabezado-marca">
        <h1>Mi primera APP con React</h1>
        <nav>
          <a href="#">Inicio</a>
          <a href="#">Tecnologias</a>
          <a href="#">Contacto</a>
        </nav>
      </div>
      <MenuUsuario usuario={usuario} />
    </header>
  )
}

export default Encabezado