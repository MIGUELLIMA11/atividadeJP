import { useState } from 'react'
import FormularioGasto from './components/FormularioGasto'
import FiltroCategorias from './components/FiltroCategorias'
import ListaGastos from './components/ListaGastos'
import TotalGastos from './components/TotalGastos'
import './App.css'

function App() {
  const [gastos, definirGastos] = useState([])
  const [categoriaSelecionada, definirCategoriaSelecionada] = useState('Todas')
  const gastosVisiveis = categoriaSelecionada === 'Todas'
    ? gastos
    : gastos.filter((gasto) => gasto.categoria === categoriaSelecionada)

  function adicionarGasto(novoGasto) {
    definirGastos((gastosAtuais) => [
      ...gastosAtuais,
      { ...novoGasto, id: crypto.randomUUID() },
    ])
  }

  function removerGasto(idGasto) {
    definirGastos((gastosAtuais) => gastosAtuais.filter((gasto) => gasto.id !== idGasto))
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
          <TotalGastos gastos={gastosVisiveis} categoria={categoriaSelecionada} />
          <FiltroCategorias
            categoria={categoriaSelecionada}
            aoAlterar={definirCategoriaSelecionada}
          />
          <ListaGastos
            gastos={gastosVisiveis}
            aoRemover={removerGasto}
            categoria={categoriaSelecionada}
          />
        </div>
      </div>
    </main>
  )
}

export default App
