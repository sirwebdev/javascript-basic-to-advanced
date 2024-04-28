# Controle de Versões com Git

## Introdução ao Git

O Git é um sistema de controle de versões distribuído, projetado para lidar com tudo, desde pequenos a grandes projetos com velocidade e eficiência. O Git é fundamental para a colaboração em equipe, permitindo que múltiplos desenvolvedores trabalhem em paralelo em diferentes partes de um projeto sem conflitar uns com os outros.

### O que é Git?

Git é um sistema para gerenciar mudanças no código fonte, documentos, ou qualquer conjunto de arquivos ao longo do tempo. Mantém um registro de todas as alterações em um repositório e permite que várias versões de um projeto sejam mantidas em paralelo.

### Por que usar Git?

- **Controle de Versões:** Permite voltar a qualquer estado anterior de um desenvolvimento e comparar mudanças ao longo do tempo.
- **Colaboração:** Vários desenvolvedores podem trabalhar simultaneamente no mesmo projeto de forma eficiente.
- **Track Changes:** Cada alteração inclui autor e descrição, o que ajuda a entender por que uma alteração foi feita.

## Criando uma Conta no GitHub

Antes de começarmos a utilizar o Git, é útil ter uma conta no GitHub. O GitHub é uma plataforma de hospedagem para controle de versão e colaboração. Permite que outros desenvolvedores em qualquer lugar do mundo trabalhem juntos em projetos.

Para criar uma conta no GitHub, siga estas etapas:

1. Acesse [GitHub.com](https://github.com/).
2. Clique em "Sign up" no canto superior direito.
3. Preencha o formulário de inscrição e siga as instruções para criar uma nova conta.

Depois de criar sua conta, você pode hospedar seus próprios projetos (repositórios) e colaborar com outros desenvolvedores.

## Comandos Básicos do Git

### Inicialização de um Repositório

- **`git init`**: Transforma o diretório atual em um repositório Git, permitindo que o Git comece a rastrear as alterações.

### Rastreamento de Arquivos

- **`git add`**: Adiciona arquivos à área de preparação (staging area) para serem incluídos no próximo commit.
- **`git status`**: Exibe o estado dos arquivos no diretório de trabalho e na staging area.

### Criar Commits

- **`git commit`**: Armazena de forma permanente as mudanças da staging area no diretório do repositório.

### Exemplo de Código

Aqui está um exemplo básico de comandos Git para iniciar um repositório e realizar um commit inicial:

```bash
git init
git add .
git commit -m "Initial commit"
```
