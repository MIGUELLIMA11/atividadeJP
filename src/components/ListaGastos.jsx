function ListaGastos({ gastos }) {
  return (
    <section className="lista-gastos" aria-labelledby="titulo-lista">
      <div className="cabecalho-lista">
        <h2 id="titulo-lista">Seus gastos</h2>
        <span className="quantidade-gastos">
          {gastos.length} {gastos.length === 1 ? 'registro' : 'registros'}
        </span>
      </div>
      <ul className="registros" aria-label="Gastos registrados">
        {gastos.map((gasto) => (
          <li className="registro-gasto" key={gasto.id}>
            <div className="detalhes-gasto">
              <strong>{gasto.descricao}</strong>
              <span className="categoria-gasto">{gasto.categoria}</span>
            </div>
            <span className="valor-gasto">
              {(gasto.valorCentavos / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </li>
        ))}
      </ul>
      {gastos.length === 0 && <p className="lista-vazia">Nenhum gasto registrado.</p>}
    </section>
  )
}

export default ListaGastos