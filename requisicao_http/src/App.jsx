import './App.css';

import { useState, useEffect, use } from 'react';

// Importando o hook personalizado
import { useFetch } from './hooks/useFetch';

const apiUrl = 'http://localhost:3000/products';

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Recebe os dados do hook personalizado
  const { data: items, httpConfig, loading, error } = useFetch(apiUrl);

  // Buscar os produtos da API
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(apiUrl);
  //     const data = await response.json();
  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);

  // Adicionar produtos
  const handleAddProduct = async (event) => {
    event.preventDefault();

    // Cria o objeto do produto a ser enviado para a API
    const product = {
      name,
      price,
    };

    // Envia a requisição POST para a API
    // const response = await fetch(apiUrl, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(product),
    // });

    // // Carrega a resposta da API e atualiza a lista de produtos
    // const addedProduct = await response.json();
    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    httpConfig(product, "POST");
    setName("");
    setPrice("");
  }

  // Excluir produtos
  const handleDeleteProduct = async (id) => {
    httpConfig(id, "DELETE");
  }

  return (
    <>
      <div className="App">
        <h2>Lista de produtos</h2>
        {/* Loading */}
        {loading && <p>Carregando...</p>}
        {/* Error */}
        {error && <p>{error}</p>}
        {
          !error && (
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {
                  items && items.map((prod) => (
                    <tr key={prod.id}>
                      <td>{prod.id}</td>
                      <td>{prod.name}</td>
                      <td>R$ {prod.price}</td>
                      <td>
                        <button onClick={() => handleDeleteProduct(prod.id)}>Excluir</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          )
        }
        <div className="add-product">
          <form onSubmit={handleAddProduct}>
            <label>
              <span>Nome</span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              <span>Preço</span>
              <input
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            {/* Remover botão quando estiver carregando */}
            {loading && <button type="submit" disabled>Aguarde</button>}
            {!loading && <button type="submit">Adicionar Produto</button>}
          </form>
        </div>
      </div>

    </>
  )
}

export default App
