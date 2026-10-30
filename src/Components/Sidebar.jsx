import { opcionesMenu } from "../data/menu";

function Sidebar({ usuario }) {
  return (
    <aside className="sidebar">
      <p className="sidebar-saludo">Hola, {usuario.nombre}</p>
      <h3 className="sidebar-title">menú</h3>

      <nav>
        <ul className="sidebar-menu">
          {opcionesMenu.map((opcion) => (
            <li key={opcion.id}>
              <a
                href={opcion.url}
                className={`menu-option ${opcion.activo ? "menu-option-active" : ""}`}
              >
                <span className="menu-icon" aria-hidden="true">{opcion.icono}</span>
                <span className="menu-label">{opcion.texto}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <p className="sidebar-pie">3312943 - ADSO</p>
    </aside>
  );
}

export default Sidebar;