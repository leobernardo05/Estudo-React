const Desafio = () => {
    const num = 10;
    const num2 = 20;
    return (
        <div>
            <button onClick={() => console.log(num + num2)}>Clique para ver soma</button>
            <p>a soma dos numeros é {num + num2}</p>
        </div>
    );
}

export default Desafio;