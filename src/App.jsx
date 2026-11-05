import FormularioGasto from './components/FormularioGasto'
import ListaGastos from './components/ListaGastos'
import TotalGastos from './components/TotalGastos'
import './App.css'

function App() {
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
        <FormularioGasto />
        <div className="resumo-gastos">
          <TotalGastos />
          <ListaGastos />
        </div>
      </div>
    </main>
  )
}

export default App
