import React from 'react'

const Card = ({nombre, domicilio}) => {
  return (
    <div className='card'>
      <h3>Datos cargados correctamente!</h3>
      <p>Nombre: {nombre}</p>
      <p>Domicilio: {domicilio}</p>
    </div>
  )
}

export default Card