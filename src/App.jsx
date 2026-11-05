import { useEffect, useState } from 'react'
import FormularioGasto from './components/FormularioGasto'
import FiltroCategorias from './components/FiltroCategorias'
import ListaGastos from './components/ListaGastos'
import TotalGastos from './components/TotalGastos'
import './App.css'

const chaveArmazenamento = 'controle-gastos:gastos'

function carregarGastos() {
  try {
    const gastos = JSON.parse(localStorage.getItem(chaveArmazenamento) ?? '[]')
    const categorias = ['Alimentação', 'Transporte', 'Lazer', 'Outros']
    const dadosValidos = Array.isArray(gastos) && gastos.every((gasto) => (
      gasto !== null &&
      typeof gasto === 'object' &&
      typeof gasto.id === 'string' && gasto.id.trim() !== '' &&
      typeof gasto.descricao === 'string' && gasto.descricao.trim() !== '' &&
      Number.isSafeInteger(gasto.valorCentavos) && gasto.valorCentavos > 0 &&
      categorias.includes(gasto.categoria)
    ))

    if (!dadosValidos || new Set(gastos.map((gasto) => gasto.id)).size !== gastos.length) {
      throw new Error('Dados de gastos inválidos.')
    }

    return { gastos, podeSalvar: true, erro: '' }
  } catch {
    return {
      gastos: [],
      podeSalvar: false,
      erro: 'Não foi possível ler os gastos salvos. Os dados originais foram preservados; alterações nesta sessão não serão salvas.',
    }
  }
}

function App() {
  const [dadosSalvos] = useState(carregarGastos)
  const [gastos, definirGastos] = useState(dadosSalvos.gastos)
  const [erroArmazenamento, definirErroArmazenamento] = useState(dadosSalvos.erro)
  const [categoriaSelecionada, definirCategoriaSelecionada] = useState('Todas')
  const gastosVisiveis = categoriaSelecionada === 'Todas'
    ? gastos
    : gastos.filter((gasto) => gasto.categoria === categoriaSelecionada)

  useEffect(() => {
    if (!dadosSalvos.podeSalvar) return

    let sincronizacaoAtiva = true

    queueMicrotask(() => {
      if (!sincronizacaoAtiva) return

      try {
        localStorage.setItem(chaveArmazenamento, JSON.stringify(gastos))
        definirErroArmazenamento('')
      } catch {
        definirErroArmazenamento('Não foi possível salvar no navegador. Os gastos continuam nesta sessão, mas podem ser perdidos ao recarregar.')
      }
    })

    return () => {
      sincronizacaoAtiva = false
    }
  }, [gastos, dadosSalvos.podeSalvar])

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

      {erroArmazenamento && (
        <p className="mensagem-erro aviso-armazenamento" role="alert">
          {erroArmazenamento}
        </p>
      )}

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
