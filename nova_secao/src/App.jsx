import { useState } from 'react';

import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

import './App.css';

import imgCidade from './assets/city.jpg';

function App() {
  const [count, setCount] = useState(0)
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
    { id: 2, brand: "KIA", color: "Branco", km: 200000 },
    { id: 3, brand: "Renault", color: "Azul", km: 32000 },
  ];

  return (
    <>
      <div>
        <h1>Testes</h1>
        {/* Imagens - Public */}
        <div>
          <img src="/img1.jpg" alt="Paisagem" />
        </div>
        {/* Imagem - Asssets */}
        <div>
          <img src={imgCidade} alt="Cidade" />
        </div>
      </div>
      <div>
        <ManageData />
        <ListRender />
        <CondicionalRender />
        {/* Props */}
        <ShowUserName name="Henrique" />
        {/* Desestruturing props */}
        <CarDetails brand="VW" km={10000} color="Blue" />
        {/* Reaproveitamento */}
        <CarDetails brand="GM" km={15000} color="Vermelho" />
        {/* loop com array de obj */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
          />
        ))}
      </div>
    </>
  )
}

export default App
