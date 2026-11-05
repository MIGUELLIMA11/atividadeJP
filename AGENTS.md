# Instrucoes para agentes

## Projeto e comandos
- Execute os comandos nesta pasta, `controle-gastos`, nao na pasta pai nem em `C:\Windows\System32`.
- React + Vite em JavaScript/JSX e ES modules; o app ainda e o template inicial, nao um controle de gastos implementado.
- `src/main.jsx` monta `src/App.jsx` com `StrictMode`. Mantenha os novos componentes em `src/components`, um por arquivo.
- No PowerShell, use `npm.cmd install`, `npm.cmd run dev`, `npm.cmd run lint` e `npm.cmd run build`.
- O lint usa Oxlint, configurado em `.oxlintrc.json`, nao ESLint. Nao ha scripts de teste, typecheck ou formatacao.
- Depois de alterar codigo, execute lint e build; eles nao substituem os testes manuais de cada missao. Nao edite `dist/`, que e gerado pelo build.

## Regras da atividade
- Responda e comente o codigo em portugues.
- Use nomes de variaveis e componentes em portugues, componentes de funcao e `useState` para o estado.
- Use apenas React e APIs nativas do navegador; nao instale novas bibliotecas.
- Mostre valores em reais com duas casas decimais, como `R$ 12,50`.
- Nao crie nem edite o `RELATORIO.md`; as respostas e reflexoes sao do aluno.
- Trabalhe uma etapa por vez. No Plan, descreva arquivos afetados e testes sem editar; aguarde a aprovacao antes do Build. Nao antecipe as proximas missoes.
- Nao altere arquivos fora da missao atual. Se precisar ampliar o escopo, explique o motivo e aguarde aprovacao.
- No Passo 2, crie somente o layout do formulario, da lista e do total; deixe a logica para as missoes seguintes.
- Na Missao 4, apresente separadamente os planos das tentativas A e B; o aluno escreve o prompt B e escolhe qual plano executar.
- Antes do plano do bonus, explique `localStorage` e `useEffect`.
- Crie commits por etapa somente quando o aluno solicitar; nao invente resultados de testes, contagens de ferramentas ou experiencias para o relatorio.

## Verificacao por missao
- Adicionar: descricao obrigatoria; testar valor vazio, `0`, `-5` e `12,50`; erros devem aparecer na pagina.
- Total: testar `0,10` + `0,20`, com resultado `R$ 0,30`.
- Remover: adicionar tres gastos e remover o do meio; conferir a lista e o total.
- Filtrar: categorias Alimentacao, Transporte, Lazer e Outros; o total acompanha o filtro. Testar adicionar outra categoria enquanto o filtro esta ativo.
- Bonus: conferir lista e total depois de recarregar a pagina; persistir os gastos no `localStorage`.