# Controle de Gastos

Aplicação React + Vite para adicionar, remover e filtrar gastos, com total em reais e persistência no navegador. Usa apenas React e APIs nativas, sem bibliotecas adicionais.

## Executar

Dentro da pasta `controle-gastos`, no PowerShell:

```powershell
npm.cmd install
npm.cmd run dev
```

Abra o endereço informado pelo Vite. Fora do PowerShell, os mesmos comandos podem ser usados com `npm` no lugar de `npm.cmd`.

## Verificar

```powershell
npm.cmd run lint
npm.cmd run build
```

Não há um script de testes automatizados. Os casos da atividade foram conferidos no navegador: descrição e valores inválidos, `12,50`, `0,10 + 0,20`, remoção do gasto do meio, inclusão de outra categoria com filtro ativo e recarregamento da página.

## Dados locais

Os gastos ficam no `localStorage`, na chave `controle-gastos:gastos`, como JSON. Os cálculos usam centavos inteiros.

Use sempre o mesmo protocolo, endereço e porta: `localhost` e `127.0.0.1`, por exemplo, têm armazenamentos separados. O app não sincroniza dados entre navegadores ou dispositivos. O filtro começa em Todas ao recarregar; todos os gastos são preservados.

## Atividade

O desenvolvimento continuou no GitHub Copilot após falhas de conexão e certificados no OpenCode. As respostas e ressalvas estão em [RELATORIO.md](RELATORIO.md); a reflexão é um texto de apoio que precisa de revisão do aluno. O histórico do Git separa a estrutura, cada missão e o bônus.
