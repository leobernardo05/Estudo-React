import './App.css'
import { useState, useEffect } from 'react';



// 4 - custom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 4 custom hook 
  const {data: items, httpConfig, loading, error} = useFetch(url);

  const [name, setName] =  useState("")
  const [price, setPrice] = useState("")

  // sincroniza hook com state local
  useEffect(() => {
    if (items) {
      setProducts(items);
    }
  }, [items]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await fetch(url);
  //       const data = await res.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error('Erro ao buscar dados:', error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  // 2 - add produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name, 
      price,
    }

  //   const res = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(product),
  //   })

  //   // 3 - carregamento dinâmico 
  //   const addedProduct = await res.json()

  //   setProducts((prevProducts) => [...prevProducts, addedProduct])
  
  // 5 - refatorando o post
  httpConfig(product, "POST")
  
    setName("")
    setPrice("")
  }


  return (
    <div>
      <h1>Lista de produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <ul>
        {products && products.map((item) => (
          <li key={item.id}>{item.name} - R${item.price}</li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </label>

          <label>
            Preço:
            <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </label>
          {/* 7 - state de loading no post */}
          {loading && <input type="submit" value="criar"/>}
        </form>
      </div>
    </div>
  );
}

export default App;
