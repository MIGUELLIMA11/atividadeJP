# Relatório · Controle de Gastos

Nome: Miguel
Modelo usado: GPT-5.3 codex

## Passo 1 · AGENTS.md
1.1 O que o /init descobriu sozinho sobre o projeto?
Resposta: Tentei executar o /init no OpenCode, mas ele apresentou erros de conexão e não concluiu a análise. Continuei com o Copilot, que identificou React + Vite, JavaScript/JSX e Oxlint, sem um comando de testes configurado
1.2 Qual regra você adicionou ao AGENTS.md e por quê?
Resposta: Não altere arquivos fora da missão atual.

## Passo 2 · Estrutura
2.1 Quais arquivos o plano criou ou alterou?
Resposta: Criamos FormularioGasto.jsx, ListaGastos.jsx e TotalGastos.jsx em src/components e alteramos App.jsx, App.css e index.css dentro de src.
2.2 Qual regra do AGENTS.md você viu sendo aplicada?
Resposta: Os componentes ficaram separados, um por arquivo, com nomes em português e sem instalar bibliotecas novas.

## Missão 1 · Adicionar
M1.1 Como o app trata "12,50" com vírgula? Quem decidiu isso: você ou o agente?
Resposta: O agente propôs aceitar a vírgula e guardar o valor em centavos. Assim, 12,50 vira 1250 centavos e aparece como R$ 12,50 na lista.
M1.2 Quantas tool calls a missão usou?
Resposta: Foram 10 chamadas na implementação e no fechamento da missão, da leitura de App.jsx até o commit, incluindo edição, testes e relatório. A preparação e o commit do layout ficaram fora dessa contagem.

## Missão 2 · Total
M2.1 Quanto deu 0,10 + 0,20 no app?
Resposta: No teste do navegador deu R$ 0,30. O app soma 10 e 20 centavos e só depois formata o resultado em reais.
M2.2 Por que 0.1 + 0.2 não dá exatamente 0.3 no JavaScript?
Resposta: Porque o JavaScript guarda os números em ponto flutuante binário, e 0.1 e 0.2 não têm representação exata nesse formato. A soma acaba ficando 0.30000000000000004. No app, usamos centavos inteiros para evitar esse problema.

## Missão 3 · Remover
M3.1 O agente mudou algo que você não pediu? O quê?
Resposta: O diff ficou limitado à remoção: função no App, botão na lista e estilos desse botão. Não mudou a validação do formulário nem adicionou outra funcionalidade.
M3.2 Como o código sabe qual gasto remover?
Resposta: Cada gasto recebe um id único quando é adicionado. O botão passa esse id para a função de remover, que mantém na lista só os gastos com ids diferentes. Não depende da descrição nem da posição.

## Missão 4 · Filtrar
M4.1 Qual foi o seu prompt da tentativa B?
Resposta: Pedi ao agente para redigir o prompt B: "Coloque um filtro acima da lista com Todas, Alimentação, Transporte, Lazer e Outros. Mostre só os gastos da categoria e seu total. Ao adicionar outra categoria, mantenha o filtro e guarde o gasto para aparecer quando eu trocar a seleção."
M4.2 Qual tentativa gerou o melhor plano, A ou B? Por quê?
Resposta: Seguimos o plano B porque o pedido ficou mais preciso sobre a posição do filtro, as opções, o total e os gastos de outra categoria. O plano A já sugeria filtrar por categoria pelo contexto, mas dependia mais das escolhas do agente. Só o plano B foi implementado.

## Bônus · Salvar
B.1 Onde o localStorage guarda os dados?
Resposta:
B.2 Por que os gastos não aparecem em outro navegador?
Resposta:

## Reflexão final
R.1 Sem olhar o código, explique como um dos seus componentes recebe e altera os gastos.
Resposta:
R.2 Em que momento você aceitou algo sem entender?
Resposta:
R.3 Quais decisões foram suas e quais foram do agente?
Resposta:
R.4 O que continuaria valendo se você trocasse o modelo?
Resposta: