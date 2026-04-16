import { useState } from 'react'

import UserDetails from './components/UserDetails'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const pessoas = [
    {
      nome: "Carlos Silva",
      idade: 32,
      profissao: "Engenheiro"
    },
    {
      nome: "Ana Souza",
      idade: 27,
      profissao: "Designer"
    },
    {
      nome: "Marcos Oliveira",
      idade: 45,
      profissao: "Professor"
    },
    {
      nome: "Juliana Costa",
      idade: 29,
      profissao: "Desenvolvedora"
    },
    {
      nome: "Fernanda Lima",
      idade: 15,
      profissao: "Estudante"
    }
  ];

  return (
    <>
      <section id="center">
        <h4>Listar pessoas</h4>
        {
          pessoas.map((pessoa, index) => (
            <UserDetails 
              key={index}
              nome={pessoa.nome}
              idade={pessoa.idade}
              profissao={pessoa.profissao}
            />
          ))
        }
      </section>

      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
