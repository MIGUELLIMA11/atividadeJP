import { useState } from 'react'

function FormularioGasto({ aoAdicionar }) {
  const [descricao, definirDescricao] = useState('')
  const [valor, definirValor] = useState('')
  const [categoria, definirCategoria] = useState('Alimentação')
  const [erro, definirErro] = useState('')

  function enviarGasto(evento) {
    evento.preventDefault()

    if (!descricao.trim()) {
      definirErro('Preencha a descrição do gasto.')
      return
    }

    const valorNormalizado = valor.trim().replace(',', '.')

    if (!/^\d+(?:\.\d{1,2})?$/.test(valorNormalizado)) {
      definirErro('Informe um valor maior que zero, com até duas casas decimais.')
      return
    }

    const [reais, centavos = ''] = valorNormalizado.split('.')
    const valorCentavos = Number(reais) * 100 + Number(centavos.padEnd(2, '0'))

    if (!Number.isSafeInteger(valorCentavos) || valorCentavos <= 0) {
      definirErro('Informe um valor maior que zero e dentro do limite permitido.')
      return
    }

    aoAdicionar({ descricao: descricao.trim(), valorCentavos, categoria })
    definirDescricao('')
    definirValor('')
    definirErro('')
  }

  return (
    <section className="novo-gasto" aria-labelledby="titulo-formulario">
      <h2 id="titulo-formulario">Novo gasto</h2>
      <form className="formulario-gasto" onSubmit={enviarGasto} noValidate>
        <div className="campo">
          <label htmlFor="descricao">Descrição</label>
          <input
            id="descricao"
            name="descricao"
            type="text"
            placeholder="Ex.: almoço"
            value={descricao}
            onChange={(evento) => definirDescricao(evento.target.value)}
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="valor">Valor</label>
          <div className="campo-moeda">
            <span aria-hidden="true">R$</span>
            <input
              id="valor"
              name="valor"
              type="text"
              inputMode="decimal"
              placeholder="0,00"
              value={valor}
              onChange={(evento) => definirValor(evento.target.value)}
              required
            />
          </div>
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            name="categoria"
            value={categoria}
            onChange={(evento) => definirCategoria(evento.target.value)}
          >
            <option>Alimentação</option>
            <option>Transporte</option>
            <option>Lazer</option>
            <option>Outros</option>
          </select>
        </div>

        {erro && <p className="mensagem-erro" role="alert">{erro}</p>}
        <button className="botao-adicionar" type="submit">Adicionar</button>
      </form>
    </section>
  )
}

export default FormularioGasto