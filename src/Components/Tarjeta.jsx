function Tarjeta({ icono, titulo, descripcion, horas, destacada, delayClass = '' }) {
  return (
    <article className={`card tarjeta${destacada ? ' tarjeta-destacada' : ''} ${delayClass}`.trim()}>
      <span className="tarjeta-icono">{icono}</span>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      {horas != null && <p className="tarjeta-horas">{horas} horas</p>}
    </article>
  )
}

export default Tarjeta