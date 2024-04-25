# Introdução ao React, JSX e Ecossistema Node.js

## O que é React?

React é uma biblioteca JavaScript desenvolvida pelo Facebook para a construção de interfaces de usuário. É amplamente utilizada para desenvolver aplicações web e móveis interativas. Seu principal recurso são os componentes reutilizáveis, que permitem uma grande modularidade e facilidade de manutenção.

## Componentes em React

### Componente Funcional

Um componente funcional é uma função que retorna um elemento React, sendo ideal para componentes que não necessitam de estado interno ou métodos de ciclo de vida.

```jsx
function Welcome() {
  return <h1>Hello, world!</h1>;
}
```

### Componente de Classe

Componentes de classe permitem mais funcionalidades, como manter estado e acessar métodos de ciclo de vida. Eles são definidos estendendo `React.Component`.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, world!</h1>;
  }
}
```

## JSX – JavaScript XML

JSX é uma extensão de sintaxe para JavaScript usada com React para descrever a UI. Parece-se com HTML, mas tem o poder do JavaScript.

```jsx
const element = <h1>Hello, world!</h1>;
```

## Props em React

Props são parâmetros passados a componentes, permitindo a passagem de dados entre componentes. São sempre somente leitura.

```jsx
function App() {
  return <Welcome name="React" />;
}
```

## Imutabilidade

A imutabilidade é uma prática chave no React, que envolve nunca alterar diretamente os dados ou o estado, mas criar uma nova cópia com as alterações necessárias.

## Ecossistema Node.js

Node.js é essencial para o desenvolvimento moderno de front-end, especialmente para projetos React.

### Gerenciamento de Pacotes

- **NPM**: Ferramenta para instalar e gerenciar bibliotecas e dependências.
- **Yarn**: Alternativa ao NPM, oferecendo melhorias em desempenho e segurança.

### Ferramentas de Desenvolvimento

- **Babel**: Transpila JSX e JavaScript moderno para versões compatíveis com navegadores mais antigos.
- **Webpack**: Agrupa módulos de JavaScript e recursos, otimizando o carregamento da aplicação.

### Criação de Projeto

- **Create React App**: Configura rapidamente um novo ambiente de desenvolvimento React.

```bash
npx create-react-app my-app
cd my-app
npm start
```

## Estrutura Simplificada do Projeto

```plaintext
node_modules                # Diretório de dependências do projeto
public
  └ index.html              # Página HTML principal do projeto
src
  └ components              # Componentes personalizados
     └ greetings
        └ index.js          # Componente específico para saudações
  └ App.js                  # Componente principal da aplicação
  └ index.css               # Estilo global da aplicação
  └ index.js                # Ponto de entrada do JavaScript
.gitignore                  # Especifica arquivos não rastreados pelo Git
README.md                   # Documentação do projeto
package-lock.json           # Bloqueia versões de pacotes
package.json                # Metadados e configurações do projeto
```

## Empresas que Usam React

Empresas como Facebook, Instagram, Airbnb e Netflix utilizam React para desenvolver interfaces dinâmicas e responsivas.
