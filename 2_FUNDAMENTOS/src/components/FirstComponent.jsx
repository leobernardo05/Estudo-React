import MyComponents from "./MyComponents";

const FirstComponent = () => {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <p className="teste">Mi primer componente en React</p>
      {/* esse componente está sendo recuperado de outro lugar*/}
      <MyComponents/>
    </div>
  );
}

export default FirstComponent;