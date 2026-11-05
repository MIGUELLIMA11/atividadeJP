import { useState } from 'react'
import FormularioGasto from './components/FormularioGasto'
import ListaGastos from './components/ListaGastos'
import TotalGastos from './components/TotalGastos'
import './App.css'

function App() {
  const [gastos, definirGastos] = useState([])

  function adicionarGasto(novoGasto) {
    definirGastos((gastosAtuais) => [
      ...gastosAtuais,
      { ...novoGasto, id: crypto.randomUUID() },
    ])
  }

  return (
    <main className="aplicativo">
      <header className="cabecalho">
        <span className="marca" aria-hidden="true">R$</span>
        <div>
          <p className="identificacao">FINANÇAS PESSOAIS</p>
          <h1>Controle de gastos</h1>
        </div>
      </header>

      <div className="area-principal">
        <FormularioGasto aoAdicionar={adicionarGasto} />
        <div className="resumo-gastos">
          <TotalGastos gastos={gastos} />
          <ListaGastos gastos={gastos} />
        </div>
      </div>
    </main>
  )
}

export default App
