function FiltroCategorias({ categoria, aoAlterar }) {
  return (
    <div className="campo filtro-categorias">
      <label htmlFor="filtro-categoria">Filtrar por categoria</label>
      <select
        id="filtro-categoria"
        value={categoria}
        onChange={(evento) => aoAlterar(evento.target.value)}
      >
        <option>Todas</option>
        <option>Alimentação</option>
        <option>Transporte</option>
        <option>Lazer</option>
        <option>Outros</option>
      </select>
    </div>
  )
}

export default FiltroCategorias