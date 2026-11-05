function ListaGastos() {
  return (
    <section className="lista-gastos" aria-labelledby="titulo-lista">
      <div className="cabecalho-lista">
        <h2 id="titulo-lista">Seus gastos</h2>
        <span className="quantidade-gastos">0 registros</span>
      </div>
      <ul className="registros" aria-label="Gastos registrados" />
      <p className="lista-vazia">Nenhum gasto registrado.</p>
    </section>
  )
}

export default ListaGastos