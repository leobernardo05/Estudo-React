const TemplateExpressions = () => { 
    const name = 'Leonardo'
    const data = {
        age: 18,
        job: 'Programador'
    }
    return (
        <div>
            <h1>Olá {name}, como vai você?</h1>
            <p>Você atua com {data.job}</p>
        </div>

    )    

}

export default TemplateExpressions;