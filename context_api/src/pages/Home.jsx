import ChangeCounter from '../components/ChangeCounter'

// Refatorando o hook context
import { useCounterContext } from '../hooks/useCounterContext'

// Context mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext'

// import { useContext } from 'react'
// import { CounterContext } from '../context/CounterContext'

const Home = () => {
  // const {counter} = useContext(CounterContext)
  const { counter } = useCounterContext()

  const { color, dispatch } = useTitleColorContext()
  const setTitleColor = (color) => {
    dispatch({ type: color})
  }

  return (
    <div>
      <h2 style={{color}}>Home</h2>
      <p>Contador: {counter}</p>
      <ChangeCounter />
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
      </div>
      <div>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home