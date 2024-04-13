# Propriedades do CSS

As propriedades do CSS são fundamentais para alterar o estilo de elementos HTML através de seus seletores. Este guia aborda algumas das mais importantes.

## Modelo de Caixa (Box Model)

Cada elemento HTML é considerado uma caixa. O Modelo de Caixa descreve como essas caixas são dimensionadas e posicionadas no espaço.

- `width` e `height`: Definem a largura e altura de um elemento.
- `padding`: Espaço entre o conteúdo do elemento e sua borda.
- `margin`: Espaço entre a borda do elemento e outros elementos adjacentes.

## Propriedades de Posicionamento

Essas propriedades controlam a posição dos elementos na página.

- `position`: Especifica o tipo de posicionamento de um elemento (opções incluem `static`, `relative`, `absolute`, `fixed`, e `sticky`). [```default: static```]
- `top`, `bottom`, `right`, `left`: Define a posição do elemento quando `position` não é `static`.
- `z-index`: Gerencia a sobreposição de elementos que se sobrepõem.

## Exibição e Fluxo Visual

Estas propriedades determinam como os elementos são visualizados na tela e sua interação com outros elementos.

- `display`: Estabelece o método de exibição de um elemento (opções incluem: `block`, `inline`, `inline-block`, `flex`, `grid`). [Padrão para tags de contêiner como `section`, `div`, `article`, `aside`, `body` é `display: block`; demais tags são `display: inline`]
- `overflow`: Gerencia o conteúdo que excede a área de um elemento (opções: `scroll`, `auto`, `hidden`).
    - `overflow-x`: Controla o excesso de conteúdo no eixo horizontal.
    - `overflow-y`: Controla o excesso de conteúdo no eixo vertical.

## Estilização de Texto

Estas propriedades permitem a personalização da apresentação do texto.

- `font-family`: Define a família tipográfica do texto.
- `font-size`: Estabelece o tamanho do texto.
- `text-align`: Alinha o texto dentro de um elemento (opções: `left`, `right`, `center`, `justify`).
- `line-height`: Ajusta a altura da linha do texto.
- `text-decoration`: Adiciona decoração ao texto (opções: `underline`, `line-through`).

## Cores e Fundos

Configurações relacionadas a cores e imagens de fundo dos elementos.

- `color`: Define a cor do texto.
- `background-color`: Estabelece a cor de fundo de um elemento.
- `background-image`: Insere uma imagem de fundo.
- `background-position`: Ajusta a posição de uma imagem de fundo.
- `background-repeat`: Controla a repetição da imagem de fundo.
