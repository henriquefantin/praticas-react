import { useParams, Link  } from "react-router-dom"

import { useFetch } from "../hooks/useFetch"

const Product = () => {
    const urlApi = "http://localhost:3000/products"
    const { id } = useParams()
    const { data: product, loading, error } = useFetch(`${urlApi}/${id}`)

    return (
        <>
            <h2>Produto {id}</h2>
            {error && <p>{error}</p>}
            {loading && <p>Carregando...</p>}
            {
                product && (
                    <div>
                        <p><strong>Nome:</strong> {product.name}</p>
                        <p><strong>Preço:</strong> R$ {product.price}</p>
                        {/* Nested Routes */}
                        <Link to={`/products/${id}/info`}>Mais informações</Link>
                    </div>
                )
            }
        </>
    )
}

export default Product