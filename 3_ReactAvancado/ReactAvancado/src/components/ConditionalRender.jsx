import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);

  const [name, setName] = useState("João")

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      
      {/* Diferentemente */}
      {!x && <p>Se x for true, sim!</p>}
     
        {/* condicional ternária */}
        <h1>IF ternário</h1>
      {name === "Leo" ? (
        <div>
          <p>O nome é Leo</p>  
        </div>
      ) : (
        <div>Nome não encontrado</div>
      )}

      <button onClick={() => setName("Leo")}>Clica aqui!</button>
      
    </div>
  );
};

export default ConditionalRender;
