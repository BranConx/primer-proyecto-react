function Sidebar() {
  return (
    <aside className="sidebar">
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
