import { useState } from "react";
import MyComponent from "./components/MyComponent"
import Title from "./components/Title";

function App() {

  const n = 12;
  const [name] = useState("Marcelo");

  const redTitle = false

  return (
    <div class="App">
      {/* css global */}
      <h1>React com CSS</h1>
      
      {/* css de componente */}
     <MyComponent />
     <p>este é o paragrafo de APP.jsx</p>
 
    {/* inline CSS */}
    <p style={{color: "blue"}}>este elemento foi estilizado de forma inline</p>
   
    {/* css inline dinâmico */}
    <h2 style={n < 10 ? ({ color: "blue"}) : ({color: "pink"})}>CSS dinâmico</h2> 
    <h2 style={n < 20 ? ({ color: "blue"}) : ({color: "pink"})}>CSS dinâmico</h2> 
    <h2
      style={
        name === "Leo"
        ? {color: "green", backgroundColor: "000"}
        : null  
      }
    >
      teste nome
    </h2>
    {/* classe dinâmica */}
    <h2 className={redTitle ? "red-title" : "title"}>
      Este título vai ter classe dinâmica
    </h2>
    {/* CSS Modules */}
    
      <Title/>
    </div> 
  )
}

export default App
