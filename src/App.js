import React, { useState } from 'react';
import './App.css';

function App() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = () => {
        const alturaMetros = altura / 100;
        const imcCalculado = peso / (alturaMetros * alturaMetros);
        setImc(imcCalculado.toFixed(2));

        if (imcCalculado < 18.5) {
            setClassificacao('Abaixo do peso');
        } else if (imcCalculado < 24.9) {
            setClassificacao('Peso normal');
        } else if (imcCalculado < 29.9) {
            setClassificacao('Sobrepeso');
        } else {
            setClassificacao('Obesidade');
        }
    };

    return (
        <div className="App">
            <h1>Calculadora de IMC</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    calcularIMC();
                }}
            >
                <div>
                    <label>Altura (cm):
                        <input
                            type="number"
                            value={altura}
                            onChange={(e) => setAltura(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>Peso (kg):
                        <input
                            type="number"
                            value={peso}
                            onChange={(e) => setPeso(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Calcular IMC</button>
            </form>
            {imc && (
                <div>
                    <h2>IMC: {imc}</h2>
                    <p>Classificação: {classificacao}</p>
                </div>
            )}
        </div>
    );
}

export default App;
