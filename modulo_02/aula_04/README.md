# Media Queries e Unidades de Medida no CSS

## Unidades de Medida em CSS
O uso de unidades apropriadas é essencial para criar designs flexíveis e responsivos. Aqui estão as unidades mais comuns:

- **Pixels (`px`)**: Medida fixa, comum para valores precisos de espaço e tamanho.
- **Em (`em`)**: Relativa ao tamanho da fonte do elemento pai, útil para designs escalonáveis.
- **Rem (`rem`)**: Relativa ao tamanho da fonte do elemento raiz (HTML), proporcionando consistência em todo o design.
- **Porcentagem (`%`)**: Baseada na dimensão do elemento pai, ideal para layouts fluidos.
- **Viewport Width (`vw`)** e **Viewport Height (`vh`)**: Baseadas em 1% das dimensões da viewport, perfeitas para layouts que se ajustam ao tamanho da tela.
- **Viewport Minimum (`vmin`)** e **Viewport Maximum (`vmax`)**: Relativas a 1% das menores ou maiores dimensões da viewport, respectivamente.

## Media Queries

Media Queries são ferramentas fundamentais para adaptar estilos a diferentes dispositivos e tamanhos de tela.

### Sintaxe de Media Queries
```css
@media not|only tipoDeMidia and (expressões) {
  /* Regras CSS */
}
```
- **not**: Exclui os estilos se a consulta for verdadeira (opcional).
- **only**: Aplica os estilos somente se a consulta inteira corresponder, útil para evitar aplicação em dispositivos mais antigos que não suportam media queries completamente (opcional).
- **tipoDeMidia**: Define o tipo de dispositivo, como `screen` ou `print`.
- **expressões**: Condições que testam características específicas, como `min-width` ou `orientation`.

### Uso Prático de Media Queries

#### Breakpoints Comuns
- **Smartphones**: até 480px.
- **Tablets em portrait**: 481px a 768px.
- **Tablets em landscape / Desktops pequenos**: 769px a 1024px.
- **Desktops grandes**: 1025px e além.

#### Exemplos
- **Adaptação por largura**:
  ```css
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  ```
- **Adaptação por orientação**:
  ```css
  @media (orientation: landscape) {
    body {
      background-color: navy;
    }
  }
  ```

### Boas Práticas
- **Teste Extensivo**: Verifique o design em uma variedade de dispositivos para garantir uma experiência consistente.
- **Escalabilidade**: Prefira unidades relativas para garantir que o layout se adapte às condições de visualização.
