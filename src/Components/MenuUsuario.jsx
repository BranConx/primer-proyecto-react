import fotoPerfil from '../imagenes/Usuario.jpg'

function MenuUsuario(){
    const nombre = 'Brandon Cordoba'
    const rol = 'Aprendiz ADSO'

    return(
        <div className='menu-usuario'>
            <button type='button' className='menu-usuario-boton'>
                <img src={fotoPerfil} alt={`Foto de ${nombre}`} className='avatar' />
                <span className='menu-usuario-datos'>
                    <span className='menu-usuario-nombre'>{nombre}</span>
                    <span className='menu-usuario-rol'>{rol}</span>
                </span>
                <span className='menu-usuario-flecha'>▾</span>
            </button>

            <ul className='menu-desplegable'>
                <li><a href='#'>Mi perfil</a></li>
                <li><a href='#'>Configuración</a></li>
                <li className='separador'></li>
                <li><a href='#' className='cerrar-sesion'>Cerrar sesión</a></li>
            </ul>
        </div>
    )
}

export default MenuUsuario;
