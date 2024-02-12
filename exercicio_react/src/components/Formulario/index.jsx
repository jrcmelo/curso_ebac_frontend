import React, { useState } from 'react';
import './App.css';

function App() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const [imc, setImc] = useState(null);

    const calcularIMC = () => {
        const alturaMetros = altura / 100;
        const imcCalculado = peso / (alturaMetros * alturaMetros);
        setImc(imcCalculado.toFixed(2));
    };

    const getClassificacaoIMC = () => {
        if (!imc) return '';

        if (imc < 16) return 'Magreza grave';
        if (imc < 17) return 'Magreza moderada';
        if (imc < 18.5) return 'Magreza leve';
        if (imc < 25) return 'Peso normal';
        if (imc < 30) return 'Sobrepeso';
        if (imc < 35) return 'Obesidade grau I';
        if (imc < 40) return 'Obesidade grau II (severa)';
        return 'Obesidade grau III (mórbida)';
    };

    return (
        <div className="container">
            <h1>Calculadora de IMC</h1>
            <div className="form-group">
                <label htmlFor="altura">Altura (cm):</label>
                <input type="number" id="altura" value={altura} onChange={(e) => setAltura(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="peso">Peso (kg):</label>
                <input type="number" id="peso" value={peso} onChange={(e) => setPeso(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="idade">Idade:</label>
                <input type="number" id="idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="sexo">Sexo:</label>
                <select id="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)}>
                    <option value="">Selecione</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>
            </div>
            <button className="btn-calcular" onClick={calcularIMC}>Calcular</button>
            {imc && (
                <div className="resultado">
                    <p>Seu IMC é: <span className="imc">{imc}</span></p>
                    <p>Você está classificado como: <span className="classificacao">{getClassificacaoIMC()}</span></p>
                </div>
            )}
        </div>
    );
}

export default App;
