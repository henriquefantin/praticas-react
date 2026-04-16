import React from 'react'

const CarDetails = ({ brand, km, color }) => {
  return (
    <div>
      <h4>Detalhes do carro:</h4>
      <ul>
        <li>Marca: {brand}</li>
        <li>Kilometragem: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      </div>
  )
}

export default CarDetails