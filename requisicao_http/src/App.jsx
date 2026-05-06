import './App.css';

import { useState, useEffect } from 'react';

const apiUrl = 'http://localhost:3000/products';

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Buscar os produtos da API
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  // Adicionar produtos
  const handleAddProduct = async (event) => {
    event.preventDefault();

    // Cria o objeto do produto a ser enviado para a API
    const product = {
      name,
      price,
    };

    // Envia a requisição POST para a API
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    // Carrega a resposta da API e atualiza a lista de produtos
    const addedProduct = await response.json();
    setProducts((prevProducts) => [...prevProducts, addedProduct]);

    setName("");
    setPrice("");
  }

  return (
    <>
      <div className="App">
        <h2>Lista de produtos</h2>
        <ul>
          {
            products.map((prod) => (
              <li key={prod.id}>
                {prod.name} - R$ {prod.price}
              </li>
            ))
          }
        </ul>
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
            <button type="submit">Adicionar Produto</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default App
