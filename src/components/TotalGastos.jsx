function TotalGastos({ gastos }) {
  const totalCentavos = gastos.reduce((total, gasto) => total + gasto.valorCentavos, 0)
  const totalFormatado = (totalCentavos / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <section className="total-gastos" aria-labelledby="titulo-total">
      <h2 id="titulo-total">Total de gastos</h2>
      <p className="valor-total">{totalFormatado}</p>
    </section>
  )
}

export default TotalGastos