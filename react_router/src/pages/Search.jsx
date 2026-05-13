import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {
  const [searchParams] = useSearchParams()
  const urlApi = "http://localhost:3000/products?" + searchParams;
  const {data: items, loading, error} = useFetch(urlApi);

  return (
    <div>
      <h2>Resultados de Produtos</h2>
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
                        <button >Editar</button>
                      </Link>
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

export default Search