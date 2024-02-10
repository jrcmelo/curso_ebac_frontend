import { useState } from "react";

const CalculadoraIMC = () => {
    let [altura, setAltura] = useState('');
    let [peso, setPeso] = useState('');

    const renderizaResultado = () => {
        const alturaMetros = altura / 100;
        const imcCalculado = peso / (alturaMetros * alturaMetros);
        return (<p>Seu imc é {imcCalculado()} </p>)
    }

    return (
        <form>
            <input type="number" placeholder="Sua altura" onChange={evento => setAltura(parseInt(evento.target.value))} />
            <input type="number" placeholder="Seu peso" onChange={evento => setPeso(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default CalculadoraIMC