import MyComponent from "./MyComponent";
const TemplateExpressions = () => {
    const nameUser = 'Henrique';
    const dadosJson = {
        idade: 26,
        funcao: 'Dev',
    };
    return (
        <div>
            <h4>Olá {nameUser}!</h4>
            <p>Idade: {dadosJson.idade}</p>
            <p>Função: {dadosJson.funcao}</p>
            <MyComponent/>
        </div>
    )
}

export default TemplateExpressions;