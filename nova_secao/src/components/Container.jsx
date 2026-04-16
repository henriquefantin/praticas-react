import React from 'react'

const Container = ({children, valorTeste}) => {
  return (
    <div>
        <h4>Titulo do containes</h4>
        {children}
        <p>Valor param: {valorTeste}</p>
    </div>
  )
}

export default Container