# Relatório · Controle de Gastos

Nome: Miguel
Modelo usado: GitHub Copilot no VS Code; o modelo selecionado nesta conversa não foi confirmado. No OpenCode, tentei GPT-5.3 Codex e Claude Sonnet, mas as chamadas falharam.

## Observação sobre a ferramenta

Comecei tentando fazer a atividade pelo OpenCode. Instalei a ferramenta, consegui abrir e tentei usar o GPT-5.3 Codex e o Claude Sonnet pelo GitHub Copilot, mas os pedidos falharam com a mensagem "Failed to process error response". Também não consegui acessar o portal do Foundry. Na investigação apareceram erros de conexão e de validação de certificados; não foi possível confirmar a causa exata dentro do OpenCode.

Como o prazo de entrega estava próximo, continuei pelo GitHub Copilot no VS Code. O /init do OpenCode não chegou a concluir. Mantivemos o desenvolvimento por etapas, com plano antes da implementação, testes no navegador e commits separados. As respostas foram organizadas com ajuda do agente, inclusive o texto do prompt B, e essa troca de ferramenta precisa ser considerada na avaliação.

## Passo 1 · AGENTS.md
1.1 O que o /init descobriu sozinho sobre o projeto?
Resposta: O /init não concluiu por causa dos erros no OpenCode. Depois, com o Copilot, foram identificados React + Vite, arquivos JavaScript/JSX e Oxlint. Também foi identificado que o projeto não tinha um comando de testes configurado.
1.2 Qual regra você adicionou ao AGENTS.md e por quê?
Resposta: Adotei a sugestão "Não altere arquivos fora da missão atual" e pedi ao agente para adicioná-la. A ideia era evitar mudanças desnecessárias e conseguir acompanhar melhor cada etapa.

## Passo 2 · Estrutura
2.1 Quais arquivos o plano criou ou alterou?
Resposta: Foram criados FormularioGasto.jsx, ListaGastos.jsx e TotalGastos.jsx na pasta src/components. Também foram alterados App.jsx, App.css e index.css para montar a tela e ajustar o visual.
2.2 Qual regra do AGENTS.md você viu sendo aplicada?
Resposta: Os componentes ficaram separados, um por arquivo, e com nomes em português. Também não foram instaladas bibliotecas novas.

## Missão 1 · Adicionar
M1.1 Como o app trata "12,50" com vírgula? Quem decidiu isso: você ou o agente?
Resposta: O app aceita 12,50 e transforma esse valor em 1250 centavos para guardar e calcular. Na lista, ele aparece como R$ 12,50. Essa solução foi proposta pelo agente.
M1.2 Quantas tool calls a missão usou?
Resposta: Foram 10 chamadas na implementação e no fechamento da missão, da leitura de App.jsx até o commit, incluindo edição, testes e relatório. A preparação e o commit do layout ficaram fora dessa contagem.

## Missão 2 · Total
M2.1 Quanto deu 0,10 + 0,20 no app?
Resposta: Deu R$ 0,30 no teste feito pelo agente no navegador. Isso acontece porque o app soma 10 e 20 centavos e depois mostra o resultado em reais.
M2.2 Por que 0.1 + 0.2 não dá exatamente 0.3 no JavaScript?
Resposta: O JavaScript representa os números em binário, e alguns valores decimais ficam aproximados. Por isso, 0.1 + 0.2 resulta em 0.30000000000000004. Para não depender dessa aproximação no cálculo dos gastos, usamos centavos inteiros.

## Missão 3 · Remover
M3.1 O agente mudou algo que você não pediu? O quê?
Resposta: Não houve mudança fora do necessário para essa missão. Foram adicionados a função de remover, o botão de cada gasto e os estilos dele. A validação do formulário continuou igual.
M3.2 Como o código sabe qual gasto remover?
Resposta: Cada gasto tem um id único. Quando clico em remover, o botão envia esse id e o App tira apenas o gasto correspondente. Assim, gastos com a mesma descrição não são confundidos.

## Missão 4 · Filtrar
M4.1 Qual foi o seu prompt da tentativa B?
Resposta: Pedi ao agente para redigir o prompt B: "Coloque um filtro acima da lista com Todas, Alimentação, Transporte, Lazer e Outros. Mostre só os gastos da categoria e seu total. Ao adicionar outra categoria, mantenha o filtro e guarde o gasto para aparecer quando eu trocar a seleção."
M4.2 Qual tentativa gerou o melhor plano, A ou B? Por quê?
Resposta: Seguimos o B, porque ele deixou claro onde o filtro ficaria e como a lista e o total deveriam se comportar. O A já aproveitava o contexto da atividade, mas deixava mais detalhes por conta do agente. Só o plano B foi implementado.

## Bônus · Salvar
B.1 Onde o localStorage guarda os dados?
Resposta: Os dados ficam no armazenamento local do perfil do navegador. O app transforma a lista em texto JSON e salva ali, separado pelo protocolo, endereço e porta do site. Não precisa de um servidor para isso.
B.2 Por que os gastos não aparecem em outro navegador?
Resposta: Porque cada navegador e perfil guarda seus próprios dados, e o app não faz sincronização. Até trocar a porta ou acessar por localhost em vez de 127.0.0.1 faz o navegador usar outro armazenamento para o site.

## Reflexão final
R.1 Sem olhar o código, explique como um dos seus componentes recebe e altera os gastos.
Resposta: O formulário recebe do App uma função para adicionar gastos. Quando preencho os campos e envio um gasto válido, ele passa os dados para essa função. O App atualiza a lista no estado e envia os gastos para os componentes da lista e do total, que mostram os valores atualizados.
R.2 Em que momento você aceitou algo sem entender?
Resposta: Foi principalmente na configuração do OpenCode. Segui as orientações e precisei perguntar onde pegar a chave, como usar os terminais e o que significavam os erros de resposta. Nessa parte, dependi bastante das explicações do agente para continuar.
R.3 Quais decisões foram suas e quais foram do agente?
Resposta: Eu decidi continuar pelo Copilot depois dos erros no OpenCode, pedi para seguir uma missão por vez e autorizei as implementações. O agente propôs a organização dos componentes, o uso de centavos, os ids e a forma de salvar os gastos. Também pedi ajuda para escrever o prompt B e as respostas do relatório.
R.4 O que continuaria valendo se você trocasse o modelo?
Resposta: Os requisitos, as regras do projeto e os testes continuariam os mesmos. Mesmo trocando o modelo, eu ainda precisaria acompanhar o plano, conferir as mudanças e verificar se o app faz o que foi pedido. O histórico de commits também continuaria mostrando a evolução do trabalho.