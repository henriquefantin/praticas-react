import { useState } from 'react'

import MyForm from './components/MyForm'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>Formulario</h1>
          <MyForm user={{ name: 'John Doe', email: 'john.doe@example.com', bio: 'Desenvolvedor web', role: 'user' }} />
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
        </div>
        <div id="social">
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
