import './App.css'
// imagens
import City from './assets/img-assets.webp'

// Componentes 
import ManageData from './components/ManageData.jsx'
import ListRendes from './components/ListRendes.jsx'
import ConditionalRender from './components/ConditionalRender.jsx'
import ShowUserName from './components/ShowUserName.jsx'
import DesestruturandoProps from './components/DesestruturandoProps.jsx'
import { useState } from 'react'
import Fragment from './components/Fragment.jsx'
import Container from './components/Container.jsx'
import ExecutarFunctions from './components/ExecutarFunctions.jsx'
import Message from './components/Message.jsx'
import ChangeMessage from './components/ChangeMessage.jsx'

function App() {
  // outra forma de passar a props
  // const name = "Joaquim"

  const[userName] = useState("Maria")

  const cars = [
    { id: 1, brand: "Ford", km: 0, color: "Branco", newCar: true },
    { id: 2, brand: "Chevrolet", km: 156810, color: "Preta", newCar: false },
    { id: 3, brand: "Fiat", km: 0, color: "Vermelho", newCar: true },
    { id: 4, brand: "Volkswagen", km: 10000, color: "Azul", newCar: false }
  ]

function ShowUserName (){
  console.log ("Evento do componente pai!")
}

const [message, setMessage] = useState("");

const handleMessage = (msg) => {
  setMessage(msg);
};

  return (
    <div className='App'>
      {/* Imagem em public */}
      <div>
      <h1>Imagem em public</h1>
        <img src="/img-1.webp" alt="Paisagem" />
      </div>

      {/* img em assets */}
      <div>
        <h1>Imagem com assets</h1>
        <img src={City} alt="Cidade" />
      </div>

      {/* uso de Stade */}
      <div>
        <h1>Utilizando useStade</h1>
        <ManageData/>
      </div>

      {/* renderizando listas */}
      <div>
        <h1>Renderizando Listas</h1>
        <ListRendes/>
      </div>

      {/* condicional */}
      <div>
        <h1>Conditional Render</h1>
        <ConditionalRender/>
      </div>

      {/* estudo props */}
      <div>
      <h1>Props</h1>
        <ShowUserName name={userName} />
      </div>

      {/* desestruturando props */}
      <div>
        <h1>Desestruturando props</h1>
        <DesestruturandoProps brand="VW" km={10000} color="Azul" newCar="false" />
      </div>
    
      {/* reaproveitando */} 
      <div>
        <DesestruturandoProps brand="Ford" km={0} color="Branco" newCar="true"/>
        <DesestruturandoProps brand="Chevrolet" km={156810} color="Preta" newCar="false"/>
      </div>
      
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <DesestruturandoProps 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      {/* fragment */}
      {/* importa sem a necessidade de uma div para melhor organizar o html, sem div*/}
      <Fragment/>

      {/*children*/}
      <Container myValue="testing">
        <p>este é o conteudo</p>
      </Container>

      {/* executar função */}
      <ExecutarFunctions myFunction={ShowUserName}/>
      
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>
    
    </div>
  )
}

export default App
