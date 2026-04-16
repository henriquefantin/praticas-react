import React from 'react'
import ConditionalRenderDriver from './ConditionalRenderDriver'

const UserDetails = ({nome,idade,profissao}) => {
  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
      <ConditionalRenderDriver idade={idade}/>
    </div>
  )
}

export default UserDetails