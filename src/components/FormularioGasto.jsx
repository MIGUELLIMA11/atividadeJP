function FormularioGasto() {
  return (
    <section className="novo-gasto" aria-labelledby="titulo-formulario">
      <h2 id="titulo-formulario">Novo gasto</h2>
      <form className="formulario-gasto">
        <div className="campo">
          <label htmlFor="descricao">Descrição</label>
          <input id="descricao" name="descricao" type="text" placeholder="Ex.: almoço" />
        </div>

        <div className="campo">
          <label htmlFor="valor">Valor</label>
          <div className="campo-moeda">
            <span aria-hidden="true">R$</span>
            <input id="valor" name="valor" type="text" inputMode="decimal" placeholder="0,00" />
          </div>
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria" name="categoria" defaultValue="Alimentação">
            <option>Alimentação</option>
            <option>Transporte</option>
            <option>Lazer</option>
            <option>Outros</option>
          </select>
        </div>

        <button className="botao-adicionar" type="button">Adicionar</button>
      </form>
    </section>
  )
}

export default FormularioGasto