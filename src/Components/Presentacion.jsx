// Presentacion recibe todos los datos del perfil desde App mediante la prop usuario.
function Presentacion({ usuario }) {
  return (
    <article className="card presentacion delay-1">
      {/* La foto y el texto alternativo también vienen del objeto usuario. */}
      <img className="presentacion-foto" src={usuario.foto} alt={`Foto de ${usuario.nombre}`} />
      <div className="presentacion-contenido">
        <p className="presentacion-etiqueta">Mi perfil</p>
        <h2>{usuario.nombre}</h2>
        <p className="presentacion-barrio"><strong>Barrio:</strong> {usuario.barrio}</p>
        <div className="presentacion-contacto">
          <h3>Medios de contacto</h3>
          <p>
            <strong>Correo:</strong>{' '}
            <a href={`mailto:${usuario.correo}`}>{usuario.correo}</a>
          </p>
          <p>
            <strong>Teléfono:</strong>{' '}
            {/* Se quitan los espacios del teléfono solo para construir el enlace tel:. */}
            <a href={`tel:${usuario.telefono.replace(/\s/g, '')}`}>{usuario.telefono}</a>
          </p>
        </div>
        <p className="presentacion-descripcion">
          {usuario.descripcion}
        </p>
      </div>
    </article>
  )
}

export default Presentacion
