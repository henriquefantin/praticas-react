import React from 'react'

const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <button onClick={myFunction}>Executar funcao</button>
    </div>
  )
}

export default ExecuteFunction