import fotoPerfil from '../imagenes/Usuario.jpg'

function Presentacion() {
  return (
    <article className="card presentacion delay-1">
      <img className="presentacion-foto" src={fotoPerfil} alt="Foto de Brandon Esmith Cordoba Ortiz" />
      <div className="presentacion-contenido">
        <p className="presentacion-etiqueta">Mi perfil</p>
        <h2>Brandon Esmith Cordoba Ortiz</h2>
        <p className="presentacion-barrio"><strong>Barrio:</strong> Valencia</p>
        <div className="presentacion-contacto">
          <h3>Medios de contacto</h3>
          <p>
            <strong>Correo:</strong>{' '}
            <a href="mailto:bcordobaortiz06@gmail.com">bcordobaortiz06@gmail.com</a>
          </p>
          <p>
            <strong>Teléfono:</strong>{' '}
            <a href="tel:3148233833">+57 3148233833</a>
          </p>
        </div>
        <p className="presentacion-descripcion">
          Aprendiz del SENA en Análisis y Desarrollo de Software.
        </p>
      </div>
    </article>
  )
}

export default Presentacion
