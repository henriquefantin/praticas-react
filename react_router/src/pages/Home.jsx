import './Home.css'

import { Link } from 'react-router-dom'

// Hooks
import { useFetch } from '../hooks/useFetch'

const Home = () => {
  const urlApi = "http://localhost:3000/products"

  const { data: items, loading, error } = useFetch(urlApi)

  // Editar produtos
  const handleEditProduct = (id) => {
    <Link to={`/products/${id}`} />
  }

  // Excluir produtos
  const handleDeleteProduct = async (id) => {
    httpConfig(id, "DELETE");
  }

  return (
    <div>
      <h2>Produtos</h2>
      {error && <p>{error}</p>}
      {
        !error && (
          <table className="table">
            <thead>
              <tr>
                <th align="left">ID</th>
                <th align="left">Nome</th>
                <th align="center">Preço</th>
                <th align="center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {
                items && items.map((prod) => (
                  <tr key={prod.id}>
                    <td align="left">{prod.id}</td>
                    <td align="left">{prod.name}</td>
                    <td align="center">R$ {prod.price}</td>
                    <td align="center">
                      <Link to={`/products/${prod.id}`}>
                        {/* onClick={() => handleEditProduct(prod.id)} */}
                        <button >Editar</button>
                      </Link>
                      <button onClick={() => handleDeleteProduct(prod.id)} className='ml-2'>Excluir</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        )
      }

    </div>
  )
}

export default Home