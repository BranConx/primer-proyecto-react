import reactLogo from '../assets/react.svg'

function Tarjeta({ delayClass }) {
  return (
    <article className={`card ${delayClass}`}>
      <img className="card-icon" src={reactLogo} alt="Logo de React" />
      <h3>React</h3>
      <p>
        Biblioteca de JavaScript para construir interfaces con componentes
      </p>
    </article>
  )
}

export default Tarjeta