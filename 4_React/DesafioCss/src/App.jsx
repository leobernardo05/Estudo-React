import './App.css'
import Car from './components/Car';

function App() {
  const myCars = [
    {id: 1, name: "Fusca", km: 100, color: "branca"},
    {id: 2, name: "Gol", km: 50000, color: "preta"},
    {id: 3, name: "Palio", km: 20000, color: "vermelha"},
  ];

  return (
    <div className='App'>
      <h1>Showroom de carros</h1>
      <div className='car-container'>
        {myCars.map((car) => (
          <Car key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
