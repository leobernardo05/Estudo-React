const Events = () => {
    const handleyMyEvent = () => {
        console.log('Ativando o evento')
    }

    const renderSomething = (x) => {
        if (x){
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Agora não!</h1>
        }
    }
    
    return (
        <div>
            <div>
                <button onClick={handleyMyEvent}>Clique aqui</button>
            </div>
            <div> 
                <button onClick={() => console.log('clicou aqui tbm')}>Clique aqui tambem</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
};
export default Events;