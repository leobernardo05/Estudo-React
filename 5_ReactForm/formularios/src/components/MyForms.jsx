import "./MyForm.css";
import { useState } from "react";

const MyForms = ({user}) => {
  // 6 - controlled inputs
  // 3 - gerenciamento de dados
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();

  // const handleName = (e) => {
  //     console.log(e.target.value);
  // } --- maneira antiga de fazer

  // 4 - gerenciamento de dados com simple state
  const [name, setName] = useState( user ? user.name : '');
  const [email, setEmail] = useState();

  const [bio, setBio] = useState ("")

  const [role, setRole] = useState("")

  const handleName = (e) => {
    setName(e.target.value);
    setEmail(e.target.value);
  };

  console.log(name);
  console.log(email)

  //envio
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário")
    console.log(name,email, bio, role)
  
    // 7 - limpar formularios - boa pratica em fórmularios
    setName ("");
    setEmail("");
    setBio("")
  };

  return (
    <div>
      {/* 5- envio de form */}


      {/* 1 - criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input 
            type="text" 
            name="name" 
            placeholder="Digite o seu nome" 
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 - label envolvendo input */}
        <label>
          <span>E-mail</span>
          <input 
            type="email" 
            name="email" 
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* 8 - textarea */}
        <label>
          <textarea 
            name="bio" 
            placeholder="Descrição do usuário" 
            onChange={(e) => setBio(e.target.value)} 
            value={bio}
            >
          </textarea>
        </label>
        {/* 9 select */}
        <label>
          <span>Função no sitema</span>
          <select name="role" onChange={(e) => setRole (e.target.value)}>
            <option value="user">Usuario</option>
            <option value="editor">editor</option>
            <option value="admin">administrator</option>
          </select>
        </label>

        <input type="submit" value="enviar" />
        {/* pode construir desses dois jeitos!! */}
      </form>
    </div>
  );
};

export default MyForms;
