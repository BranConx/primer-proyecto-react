// Sidebar recibe el usuario directamente desde App para mostrar un saludo personalizado.
function Sidebar({ usuario }) {
  return (
    <aside className="sidebar">
      {/* El nombre procede del mismo objeto usuario que recibe MenuUsuario. */}
      <p className="sidebar-saludo">Hola, {usuario.nombre}</p>
      <h3 className="sidebar-title">Menú</h3>
      <nav>
        <ul className="sidebar-menu">
          <li><a className="menu-option" href="#">🏠 Inicio</a></li>
          <li><a className="menu-option" href="#">👤 Mi perfil</a></li>
          <li><a className="menu-option" href="#">💻 Tecnologías</a></li>
          <li><a className="menu-option" href="#">📚 Recursos</a></li>
          <li><a className="menu-option" href="#">📞 Contacto</a></li>
        </ul>
      </nav>
      <p className="sidebar-pie">3312943 - ADSO</p>
    </aside>
  )
}

export default Sidebar
